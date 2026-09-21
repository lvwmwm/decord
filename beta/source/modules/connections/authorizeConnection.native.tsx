// Module ID: 9339
// Function ID: 9340
// Name: authorizeConnection
// Dependencies: [5627, 1078, 577, 4725, 9340, 9371, 9382, 4961, 9393, 1984, 5502, 9395, 8646, 4455, 5625, 2]
// Exports: default

// Module 9339 (authorizeConnection)
import Constants from "Constants" /* 1078 */;
import LinkingDefault from "Linking" /* 4455 */;
import Constants2 from "Constants" /* 5627 */;
import size from "module_2" /* 2 */;

let closure_3 = Constants2.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/connections/authorizeConnection.native.tsx");

export default function authorizeConnection(overrideUrl) {
  ({ platformType, location: _location, onClose } = overrideUrl);
  let handleModalClose5 = onClose;
  overrideUrl = overrideUrl.overrideUrl;
  const successRedirect = overrideUrl.successRedirect;
  if (platformType === PlatformTypes.LEAGUE_OF_LEGENDS) {
    platformType = tmp.RIOT_GAMES;
  }
  if (null == _location) {
    _location = "mobile";
  }
  if (platformType === PlatformTypes.XBOX) {
    overrideUrl(4725).hideActionSheet();
    const obj15 = overrideUrl(4725);
    const tmp23 = overrideUrl;
    const items = [_location];
    overrideUrl(9340).showModal(items);
    if (null != onClose) {
      function handleModalClose() {
        if (require != null) {
          tmp();
        }
        overrideUrl(577).unsubscribe("MODAL_POP", handleModalClose5);
      }
      handleModalClose5 = handleModalClose;
      const subscription = tmp23(577).subscribe("MODAL_POP", handleModalClose);
      const tmp23Result = tmp23(577);
    }
    const obj16 = overrideUrl(9340);
  } else {
    if (platformType !== tmp.PLAYSTATION) {
      if (platformType !== tmp.PLAYSTATION_STAGING) {
        if (platformType === tmp.CRUNCHYROLL) {
          overrideUrl(4725).hideActionSheet();
          const obj11 = overrideUrl(4725);
          const tmp15 = overrideUrl;
          const items1 = [_location];
          overrideUrl(9382).showModal(items1);
          if (null != onClose) {
            const handleModalClose4 = function handleModalClose() {
              if (require != null) {
                tmp();
              }
              overrideUrl(577).unsubscribe("MODAL_POP", handleModalClose5);
            };
            handleModalClose5 = handleModalClose4;
            const subscription1 = tmp15(577).subscribe("MODAL_POP", handleModalClose4);
            const tmp15Result = tmp15(577);
          }
          const obj12 = overrideUrl(9382);
        } else if (platformType === tmp.DOMAIN) {
          overrideUrl(4725).hideActionSheet();
          const obj8 = overrideUrl(4725);
          const tmp10 = overrideUrl;
          let obj = { locationStack: null };
          const items2 = [_location];
          obj.locationStack = items2;
          overrideUrl(4961).pushLazy(handleModalClose5(1984)(9393, dependencyMap.paths), obj);
          if (null != onClose) {
            const handleModalClose3 = function handleModalClose() {
              if (require != null) {
                tmp();
              }
              overrideUrl(577).unsubscribe("MODAL_POP", handleModalClose5);
            };
            handleModalClose5 = handleModalClose3;
            const subscription2 = tmp10(577).subscribe("MODAL_POP", handleModalClose3);
            const tmp10Result = tmp10(577);
          }
          const obj9 = overrideUrl(4961);
        } else {
          value = overrideUrl(5502).get(platformType);
          let isFederated;
          if (value != null) {
            isFederated = value.isFederated;
          }
          if (true === isFederated) {
            tmp28(4725).hideActionSheet();
            const tmp28Result = tmp28(4725);
            const obj2 = { platformType, location: _location, successRedirect };
            tmp28(4961).pushLazy(handleModalClose5(1984)(9395, tmp29.paths), obj2);
            if (null != onClose) {
              const handleModalClose2 = function handleModalClose() {
                if (require != null) {
                  tmp();
                }
                overrideUrl(577).unsubscribe("MODAL_POP", handleModalClose5);
              };
              handleModalClose5 = handleModalClose2;
              const subscription3 = tmp28(577).subscribe("MODAL_POP", handleModalClose2);
              const tmp28Result5 = tmp28(577);
            }
            const tmp28Result4 = tmp28(4961);
          } else {
            if (null != overrideUrl) {
              if (platformType === closure_3) {
                const obj4 = {
                  shouldConfirm: true,
                  href: overrideUrl,
                  onConfirm() {
                                  LinkingDefault.openURL(overrideUrl);
                                }
                };
                handleModalClose5(8646).handleClick(obj4);
                const obj3 = handleModalClose5(8646);
              }
            }
            const obj5 = { location: _location, successRedirect };
            const tmp28Result6 = tmp28(5625);
            tmp28(5625).authorize(platformType, obj5).then((body) => {
              const url = body.body.url;
              if (null != url) {
                overrideUrl(4455).openURL(url);
                const obj = overrideUrl(4455);
              }
            });
            const authorizeResult = tmp28(5625).authorize(platformType, obj5);
          }
          const obj18 = overrideUrl(5502);
          tmp29 = dependencyMap;
        }
      }
    }
    overrideUrl(4725).hideActionSheet();
    const obj13 = overrideUrl(4725);
    const tmp19 = overrideUrl;
    const items3 = [_location];
    overrideUrl(9371).showModal(items3, platformType);
    if (null != onClose) {
      handleModalClose5 = function handleModalClose() {
        if (require != null) {
          tmp();
        }
        overrideUrl(577).unsubscribe("MODAL_POP", handleModalClose5);
      };
      const subscription4 = tmp19(577).subscribe("MODAL_POP", handleModalClose5);
      const tmp19Result = tmp19(577);
    }
    const obj14 = overrideUrl(9371);
  }
};
