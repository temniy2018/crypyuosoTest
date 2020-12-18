"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var client_1 = require("@apollo/client");
var Robot_1 = require("./Robot");
var logo_png_1 = require("../../../assets/logo.png");
var query = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tquery MyQuery {\n\t\trobots {\n\t\t\tid\n\t\t\tcode\n\t\t\trobot_settings {\n\t\t\t\trobot_settings\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\tquery MyQuery {\n\t\trobots {\n\t\t\tid\n\t\t\tcode\n\t\t\trobot_settings {\n\t\t\t\trobot_settings\n\t\t\t}\n\t\t}\n\t}\n"])));
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
    list: {
        backgroundColor: '#00235a',
        height: '100%',
        padding: 20,
        display: 'flex'
    },
    errorAndLoading: {
        backgroundColor: '#00235a',
        height: '100%',
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorAndLoading__text: {
        color: 'white',
        fontSize: 18
    }
});
var RobotList = function (_a) {
    var navigation = _a.navigation;
    var _b = client_1.useQuery(query), loading = _b.loading, error = _b.error, data = _b.data;
    var _c = react_1.useState([]), robots = _c[0], setRobots = _c[1];
    var _d = react_1.useState(1), page = _d[0], setPage = _d[1];
    var ref = react_1.useRef();
    react_1.useEffect(function () {
        if (!loading) {
            setRobots(data.robots);
        }
    }, [loading]);
    var Submit = function (newRobot) {
        var newRobots = robots.map(function (el) {
            if (el.id === newRobot.id) {
                return newRobot;
            }
            else {
                return el;
            }
        });
        setRobots(newRobots);
    };
    var populate = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var scrollY;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    scrollY = event.nativeEvent.contentOffset.y;
                    if (!(scrollY > 1050 * page)) return [3 /*break*/, 2];
                    return [4 /*yield*/, setTimeout(function () { return setPage(page + 1); }, 2000)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    if (loading) {
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_native_1.View, { style: s.header },
                react_1["default"].createElement(react_native_1.Image, { source: logo_png_1["default"], style: s.header__img }),
                react_1["default"].createElement(react_native_1.Text, { style: s.header__text }, "CRYPTUOSO")),
            react_1["default"].createElement(react_native_1.View, { style: s.errorAndLoading },
                react_1["default"].createElement(react_native_1.Text, { style: s.errorAndLoading__text }, "Loading..."))));
    }
    if (error) {
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_native_1.View, { style: s.header },
                react_1["default"].createElement(react_native_1.Image, { source: logo_png_1["default"], style: s.header__img }),
                react_1["default"].createElement(react_native_1.Text, { style: s.header__text }, "CRYPTUOSO")),
            react_1["default"].createElement(react_native_1.Text, { style: s.errorAndLoading__text }, error)));
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.View, { style: s.header },
            react_1["default"].createElement(react_native_1.Image, { source: logo_png_1["default"], style: s.header__img }),
            react_1["default"].createElement(react_native_1.Text, { style: s.header__text }, "CRYPTUOSO")),
        react_1["default"].createElement(react_native_1.ScrollView, { style: s.list, onScroll: function (e) { return populate(e); } }, robots.map(function (el, i) {
            if (i < page * 10) {
                return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('RobotDetails', { robot: el, onSubmit: Submit }); }, key: el.id },
                    react_1["default"].createElement(Robot_1["default"], { id: el.id, code: el.code })));
            }
        }))));
};
exports["default"] = RobotList;
var templateObject_1;
