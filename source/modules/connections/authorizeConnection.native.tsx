// Module ID: 8897
// Function ID: 70445
// Name: authorizeConnection
// Dependencies: [4941, 653, 686, 4099, 8863, 8898, 8915, 4338, 8926, 1935, 4815, 8933, 8138, 3828, 4939, 2]
// Exports: default

// Module 8897 (authorizeConnection)
import { GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE as closure_3 } from "OperatorTypes";
import { PlatformTypes } from "ME";

let result = require("dispatcher").fileFinishedImporting("modules/connections/authorizeConnection.native.tsx");

export default function authorizeConnection(successRedirect) {
  let _location;
  let overrideUrl;
  let platformType;
  let require;
  ({ platformType, location: _location, onClose: require, overrideUrl } = successRedirect);
  successRedirect = successRedirect.successRedirect;
  function registerHandleModalClose() {
    if (null != handleModalClose) {
      handleModalClose = function handleModalClose() {
        if (null != handleModalClose) {
          handleModalClose();
        }
        overrideUrl(outer2_2[2]).unsubscribe("MODAL_POP", handleModalClose);
      };
      const subscription = overrideUrl(outer1_2[2]).subscribe("MODAL_POP", handleModalClose);
      const obj = overrideUrl(outer1_2[2]);
    }
  }
  if (platformType === PlatformTypes.LEAGUE_OF_LEGENDS) {
    platformType = PlatformTypes.RIOT_GAMES;
  }
  if (null == _location) {
    _location = "mobile";
  }
  if (platformType === PlatformTypes.XBOX) {
    overrideUrl(4099).hideActionSheet();
    const obj15 = overrideUrl(4099);
    const items = [_location];
    overrideUrl(8863).showModal(items);
    const result = registerHandleModalClose();
    const obj16 = overrideUrl(8863);
  } else {
    if (platformType !== PlatformTypes.PLAYSTATION) {
      if (platformType !== PlatformTypes.PLAYSTATION_STAGING) {
        if (platformType === PlatformTypes.CRUNCHYROLL) {
          overrideUrl(4099).hideActionSheet();
          const obj11 = overrideUrl(4099);
          const items1 = [_location];
          overrideUrl(8915).showModal(items1);
          const result1 = registerHandleModalClose();
          const obj12 = overrideUrl(8915);
        } else if (platformType === PlatformTypes.DOMAIN) {
          overrideUrl(4099).hideActionSheet();
          const obj8 = overrideUrl(4099);
          let obj = {};
          const items2 = [_location];
          obj.locationStack = items2;
          overrideUrl(4338).pushLazy(require(1935) /* maybeLoadBundle */(8926, dependencyMap.paths), obj);
          const result2 = registerHandleModalClose();
          const obj9 = overrideUrl(4338);
        } else {
          const value = overrideUrl(4815).get(platformType);
          let isFederated;
          if (null != value) {
            isFederated = value.isFederated;
          }
          if (true === isFederated) {
            overrideUrl(4099).hideActionSheet();
            const obj5 = overrideUrl(4099);
            obj = { platformType, location: _location, successRedirect };
            overrideUrl(4338).pushLazy(require(1935) /* maybeLoadBundle */(8933, dependencyMap.paths), obj);
            const result3 = registerHandleModalClose();
            const obj6 = overrideUrl(4338);
          } else {
            if (null != overrideUrl) {
              if (platformType === closure_3) {
                let obj2 = require(8138) /* isLinkTrusted */;
                const obj1 = {
                  shouldConfirm: true,
                  href: overrideUrl,
                  onConfirm() {
                                  overrideUrl(outer1_2[13]).openURL(overrideUrl);
                                }
                };
                obj2.handleClick(obj1);
              }
            }
            obj = overrideUrl(4939);
            obj2 = { location: _location, successRedirect };
            obj.authorize(platformType, obj2).then((body) => {
              const url = body.body.url;
              if (null != url) {
                overrideUrl(outer1_2[13]).openURL(url);
                const obj = overrideUrl(outer1_2[13]);
              }
            });
            const authorizeResult = obj.authorize(platformType, obj2);
          }
          const obj17 = overrideUrl(4815);
        }
      }
    }
    overrideUrl(4099).hideActionSheet();
    const obj13 = overrideUrl(4099);
    const items3 = [_location];
    overrideUrl(8898).showModal(items3, platformType);
    const result4 = registerHandleModalClose();
    const obj14 = overrideUrl(8898);
  }
};
