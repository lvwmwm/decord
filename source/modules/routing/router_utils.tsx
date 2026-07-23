// Module ID: 1198
// Function ID: 13756
// Name: shouldNavigate
// Dependencies: [653, 3, 1199, 1207, 1210, 2]
// Exports: back, currentRouteHasBackNavigation, forward, getFingerprintLocation, getHistory, getLastRouteChangeSource, getLastRouteChangeSourceLocationStack, hasNavigated, isValidFingerprintRoute, replaceWith, transitionToGuild

// Module 1198 (shouldNavigate)
import ME from "ME";
import importDefaultResult from "reportDevtoolsEvent";
import _extends from "_extends";

let closure_5;
let closure_6;
let closure_7;
function shouldNavigate() {
  const ComponentDispatch = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
  return !ComponentDispatch.hasSubscribers(constants2.MODAL_CLOSE);
}
function maybeExternallyNavigate(ME, assign) {
  let closure_0 = ME;
  let tmp = "string" !== typeof ME;
  if (!tmp) {
    tmp = !items.some((arg0) => ME.startsWith(arg0));
  }
  let flag = !tmp;
  if (!tmp) {
    const _HermesInternal = HermesInternal;
    importDefaultResult.log("" + assign + " - route to external path " + ME);
    const _window = window;
    const _Event = Event;
    const event = new Event("beforeunload");
    window.dispatchEvent(event);
    const _window2 = window;
    const _location = window.location;
    _location[assign](ME);
    flag = true;
  }
  return flag;
}
function transitionTo(CHANNELResult, source) {
  if (!maybeExternallyNavigate(CHANNELResult, "assign")) {
    const _HermesInternal = HermesInternal;
    importDefaultResult.log("transitionTo - Transitioning to " + CHANNELResult);
    source = undefined;
    if (null != source) {
      source = source.source;
    }
    let sourceLocationStack;
    if (null != source) {
      sourceLocationStack = source.sourceLocationStack;
    }
    if (null == source) {
      _extends.push(CHANNELResult);
    } else {
      const _URL = URL;
      const _window = window;
      const _HermesInternal2 = HermesInternal;
      const uRL = new URL(CHANNELResult, "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT);
      const obj = {};
      ({ pathname: obj.pathname, search: obj.search, hash: obj.hash } = uRL);
      const merged = Object.assign(source);
      _extends.push(obj);
    }
  }
}
({ Routes: closure_5, PageAnalyticsLocations: closure_6, ComponentActions: closure_7 } = ME);
importDefaultResult = new importDefaultResult("Routing/Utils");
const items = [ME.RelativeMarketingURLs.DEVELOPER_PORTAL];
_extends = _extends.createMemoryHistory();
let closure_10 = _extends.listen((arg0, arg1) => {
  if ("REPLACE" !== arg1) {
    callback();
  }
});
const result = require("_extends").fileFinishedImporting("modules/routing/router_utils.tsx");

export { shouldNavigate };
export { transitionTo };
export const transitionToGuild = function transitionToGuild(guildId, channelId, messageId, source) {
  importDefaultResult.log("transitionToGuild - Transitioning to " + JSON.stringify({ guildId, channelId, messageId }));
  transitionTo(closure_5.CHANNEL(guildId, channelId, messageId), source);
};
export const currentRouteHasBackNavigation = function currentRouteHasBackNavigation() {
  let hasItem = null != closure_3;
  if (hasItem) {
    const ChannelBackNavigationSources = require(1210) /* set */.ChannelBackNavigationSources;
    hasItem = ChannelBackNavigationSources.has(closure_3);
  }
  return hasItem;
};
export const replaceWith = function replaceWith(ME, state) {
  if (!maybeExternallyNavigate(ME, "replace")) {
    const _HermesInternal = HermesInternal;
    importDefaultResult.log("Replacing route with " + ME);
    if ("string" === typeof ME) {
      const replaced = _extends.replace(ME, state);
    } else {
      const replaced1 = _extends.replace(ME);
    }
    let closure_3 = arg2;
  }
};
export function getHistory() {
  return _extends;
}
export function getLastRouteChangeSource() {
  return closure_3;
}
export function getLastRouteChangeSourceLocationStack() {
  return closure_4;
}
export const isValidFingerprintRoute = function isValidFingerprintRoute(arg0) {
  return true;
};
export const getFingerprintLocation = function getFingerprintLocation(arg0) {
  let ACCOUNT_REVERT = arg0;
  if (null == arg0) {
    const pathname = _extends.location.pathname;
    let str = "";
    if (null != pathname) {
      str = pathname;
    }
    ACCOUNT_REVERT = str;
  }
  if (ACCOUNT_REVERT.startsWith(closure_5.LOGIN)) {
    ACCOUNT_REVERT = constants.LOGIN;
  } else if (ACCOUNT_REVERT.startsWith(closure_5.REGISTER)) {
    ACCOUNT_REVERT = constants.REGISTER;
  } else if (ACCOUNT_REVERT.startsWith(closure_5.INVITE(""))) {
    ACCOUNT_REVERT = constants.INVITE;
  } else if (ACCOUNT_REVERT.startsWith(closure_5.VERIFY)) {
    ACCOUNT_REVERT = constants.VERIFY;
  } else if (ACCOUNT_REVERT.startsWith(closure_5.DISABLE_EMAIL_NOTIFICATIONS)) {
    ACCOUNT_REVERT = constants.DISABLE_EMAIL_NOTIFICATIONS;
  } else if (ACCOUNT_REVERT.startsWith(closure_5.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS)) {
    ACCOUNT_REVERT = constants.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
  } else if (ACCOUNT_REVERT.startsWith(closure_5.REJECT_IP)) {
    ACCOUNT_REVERT = constants.REJECT_IP;
  } else if (ACCOUNT_REVERT.startsWith(closure_5.REJECT_MFA)) {
    ACCOUNT_REVERT = constants.REJECT_MFA;
  } else if (ACCOUNT_REVERT.startsWith(closure_5.AUTHORIZE_IP)) {
    ACCOUNT_REVERT = constants.AUTHORIZE_IP;
  } else if (ACCOUNT_REVERT.startsWith(closure_5.AUTHORIZE_PAYMENT)) {
    ACCOUNT_REVERT = constants.AUTHORIZE_PAYMENT;
  } else if (ACCOUNT_REVERT.startsWith(closure_5.RESET)) {
    ACCOUNT_REVERT = constants.RESET;
  } else if (ACCOUNT_REVERT.startsWith(closure_5.REPORT)) {
    ACCOUNT_REVERT = constants.REPORT;
  } else if (ACCOUNT_REVERT.startsWith(closure_5.REPORT_SECOND_LOOK)) {
    ACCOUNT_REVERT = constants.REPORT_SECOND_LOOK;
  } else if (ACCOUNT_REVERT.startsWith(closure_5.ACCOUNT_REVERT(""))) {
    ACCOUNT_REVERT = constants.ACCOUNT_REVERT;
  }
  return ACCOUNT_REVERT;
};
export function hasNavigated() {
  return false;
}
export const back = function back() {
  if (shouldNavigate()) {
    let c3 = null;
    _extends.goBack();
  }
};
export const forward = function forward() {
  if (shouldNavigate()) {
    let c3 = null;
    _extends.goForward();
  }
};
