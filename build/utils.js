"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing Weather');
    }
    return weatherFromRequest;
};
const parseVisibility = (visiblityFromRequest) => {
    if (!isString(visiblityFromRequest) || !isVisibility(visiblityFromRequest)) {
        throw new Error('Incorrect or missing visiblity');
    }
    return visiblityFromRequest;
};
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isString = (string) => {
    return typeof string === 'string';
    // ||  string instanceof String
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const toNewDiaryEntry = (objet) => {
    const newEntry = {
        comment: parseComment(objet.comment),
        date: parseDate(objet.date),
        weather: parseWeather(objet.weather),
        visibility: parseVisibility(objet.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
