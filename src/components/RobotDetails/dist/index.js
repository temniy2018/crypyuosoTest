"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var logo_png_1 = require("../../../assets/logo.png");
var s = react_native_1.StyleSheet.create({
    header: {
        backgroundColor: '#091943',
        padding: 20,
        paddingTop: 38,
        paddingBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    header__img: {
        width: 40,
        height: 40,
        marginRight: 20
    },
    header__text: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: '700'
    },
    main: {
        backgroundColor: '#00235a',
        height: '100%',
        padding: 20,
        display: 'flex'
    },
    main__header: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 15
    },
    main__subheader: {
        color: 'white',
        fontSize: 20
    },
    main__text: {
        color: '#f1f1f1'
    },
    main__button: {
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        borderRadius: 5
    },
    main__buttonText: {
        color: '#091943',
        fontSize: 18
    },
    main__input: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        color: 'white'
    },
    main__buttonCancel: {
        backgroundColor: '#264368',
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
        alignSelf: 'center',
        width: '50%'
    },
    main__buttonCancelText: {
        color: '#fff',
        fontSize: 14
    }
});
var RobotDetails = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var _b = react_1.useState(false), isEdit = _b[0], setIsEdit = _b[1];
    var entries = Object.entries(route.params.robot.robot_settings.robot_settings);
    var _c = react_1.useState(entries), settings = _c[0], setSettings = _c[1];
    var onSubmit = function () {
        var newSettings = {};
        settings.map(function (el) { return (newSettings[el[0]] = el[1]); });
        var newRobot = {
            __typename: 'robots',
            code: route.params.robot.code,
            id: route.params.robot.id,
            robot_settings: {
                __typename: 'v_robot_settings',
                robot_settings: newSettings
            }
        };
        JSON.stringify(newRobot);
        route.params.onSubmit(newRobot);
        setIsEdit(false);
    };
    var onChange = function (key, value, index) {
        var newSettings = settings;
        newSettings[index][1] = value;
        setSettings(newSettings);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('RobotList'); } },
            react_1["default"].createElement(react_native_1.View, { style: s.header },
                react_1["default"].createElement(react_native_1.Image, { source: logo_png_1["default"], style: s.header__img }),
                react_1["default"].createElement(react_native_1.Text, { style: s.header__text }, "CRYPTUOSO"))),
        react_1["default"].createElement(react_native_1.View, { style: s.main },
            react_1["default"].createElement(react_native_1.Text, { style: s.main__header }, "ROBOT DETAILS"),
            react_1["default"].createElement(react_native_1.Text, { style: s.main__subheader }, "ID"),
            react_1["default"].createElement(react_native_1.Text, { style: s.main__text }, route.params.robot.id),
            react_1["default"].createElement(react_native_1.Text, { style: s.main__subheader }, "CODE"),
            react_1["default"].createElement(react_native_1.Text, { style: s.main__text }, route.params.robot.code),
            settings.map(function (el, i) {
                if (isEdit) {
                    return (react_1["default"].createElement(react_native_1.View, { key: el[0] },
                        react_1["default"].createElement(react_native_1.Text, { style: s.main__subheader }, el[0]),
                        react_1["default"].createElement(react_native_1.TextInput, { style: s.main__input, placeholder: '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u0441\u0432\u043E\u0435\u0433\u043E \u0440\u043E\u0431\u043E\u0442\u0430', placeholderTextColor: '#fff', defaultValue: String(el[1]), onChangeText: function (text) { return onChange(el[0], text, i); } })));
                }
                else {
                    return (react_1["default"].createElement(react_native_1.View, { key: el[0] },
                        react_1["default"].createElement(react_native_1.Text, { style: s.main__subheader }, el[0]),
                        react_1["default"].createElement(react_native_1.Text, { style: s.main__text }, el[1])));
                }
            }),
            isEdit ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return onSubmit(); }, style: s.main__button },
                    react_1["default"].createElement(react_native_1.Text, { style: s.main__buttonText }, "Apply settings")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { setIsEdit(false); setSettings(entries); }, style: s.main__buttonCancel },
                    react_1["default"].createElement(react_native_1.Text, { style: s.main__buttonCancelText }, "Reset and cancel")))) : (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setIsEdit(true); }, style: s.main__button },
                react_1["default"].createElement(react_native_1.Text, { style: s.main__buttonText }, "Edit settings"))))));
};
exports["default"] = RobotDetails;
