define([
    'React',
    'lodash',
    'customScroll'
], function (React, _, cs) {
    'use strict';
    function scopeCustomScroll1() {
        var customScroll = cs.CustomScroll;
        return React.createElement('div', { 'className': 'example-wrapper' }, React.createElement('div', { 'className': 'container native-scroll' }, React.createElement('label', { 'className': 'side-title' }, 'Native Scroll'), React.createElement('div', { 'className': 'panel' }, React.createElement('div', { 'className': 'panel-header' }, React.createElement('label', { 'className': 'panel-title' }, 'This is boring')), React.createElement('div', { 'className': 'panel-content-native panel-content' }, React.createElement('div', { 'className': 'content-fill' }, this.getText())))), React.createElement('div', { 'className': 'container custom-scroll-example' }, React.createElement('label', { 'className': 'side-title' }, 'Custom Scroll'), React.createElement('div', { 'className': 'panel' }, React.createElement('div', { 'className': 'panel-header' }, React.createElement('label', { 'className': 'panel-title' }, 'Cool Scrollbar !')), React.createElement(customScroll, { 'allowOuterScroll': true }, React.createElement('div', { 'className': 'panel-content-custom panel-content' }, React.createElement('div', { 'className': 'content-fill' }, this.getText()))))), React.createElement('div', { 'className': 'container custom-scroll-example' }, React.createElement('label', { 'className': 'side-title' }, 'Crazy Designer'), React.createElement('div', { 'className': 'panel crazy-scroll' }, React.createElement('div', { 'className': 'panel-header' }, React.createElement('label', { 'className': 'panel-title' }, 'Who designed this ???')), React.createElement(customScroll, { 'allowOuterScroll': true }, React.createElement('div', { 'className': 'panel-content-custom panel-content' }, React.createElement('div', { 'className': 'content-fill' }, this.getText()))))), React.createElement('div', { 'className': 'scroll-creator' }));
    }
    return function () {
        return scopeCustomScroll1.apply(this, []);
    };
});