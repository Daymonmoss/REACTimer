"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./public/styles.css");
var App = function () {
    var _a = react_1.default.useState(0), time = _a[0], setTime = _a[1];
    var _b = react_1.default.useState(false), timerOn = _b[0], setTimerOn = _b[1];
    react_1.default.useEffect(function () {
        var interval = null;
        if (timerOn) {
            interval = setInterval(function () {
                setTime(function (prevTime) { return prevTime + 10; });
            }, 1000);
        }
        else if (!timerOn) {
            clearInterval(interval);
        }
        return function () { return clearInterval(interval); };
    }, [timerOn]);
    return (react_1.default.createElement("div", { className: "timers" },
        react_1.default.createElement("h2", null, "REACTimer"),
        react_1.default.createElement("div", { id: "display" },
            react_1.default.createElement("span", null,
                ("0" + Math.floor((time / 60000) % 60)).slice(-2),
                ":"),
            react_1.default.createElement("span", null,
                ("0" + Math.floor((time / 1000) % 60)).slice(-2),
                ":"),
            react_1.default.createElement("span", null, ("0" + ((time / 10) % 100)).slice(-2))),
        react_1.default.createElement("div", { id: "buttons" },
            !timerOn && time === 0 && (react_1.default.createElement("button", { onClick: function () { return setTimerOn(true); } }, "Start")),
            timerOn && react_1.default.createElement("button", { onClick: function () { return setTimerOn(false); } }, "Stop"),
            !timerOn && time > 0 && (react_1.default.createElement("button", { onClick: function () { return setTime(0); } }, "Reset")),
            !timerOn && time > 0 && (react_1.default.createElement("button", { onClick: function () { return setTimerOn(true); } }, "Resume")))));
};
exports.default = App;
//# sourceMappingURL=App.js.map