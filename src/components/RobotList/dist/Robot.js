"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var s = react_native_1.StyleSheet.create({
    list_robot: {
        backgroundColor: '#091943',
        padding: 30,
        borderRadius: 10,
        marginBottom: 10
    },
    list_robot__header: {
        color: 'white',
        fontSize: 18
    },
    list_robot__text: {
        color: '#f1f1f1'
    }
});
var Robot = function (_a) {
    var id = _a.id, code = _a.code;
    return (react_1["default"].createElement(react_native_1.View, { style: s.list_robot },
        react_1["default"].createElement(react_native_1.Text, { style: s.list_robot__header }, "ID"),
        react_1["default"].createElement(react_native_1.Text, { style: s.list_robot__text }, id),
        react_1["default"].createElement(react_native_1.Text, { style: s.list_robot__header }, "CODE"),
        react_1["default"].createElement(react_native_1.Text, { style: s.list_robot__text }, code)));
};
exports["default"] = Robot;
