// Module ID: 9371
// Function ID: 9372
// Name: authorizeConnection
// Dependencies: [5659, 1078, 577, 4757, 9372, 9403, 9414, 4993, 9425, 1984, 5534, 9427, 8678, 4487, 5657, 2]
// Exports: default

// Module 9371 (authorizeConnection)
import Constants from "Constants" /* 1078 */;
import LinkingDefault from "Linking" /* 4487 */;
import Constants2 from "Constants" /* 5659 */;
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
    overrideUrl(4757).hideActionSheet();
    const obj15 = overrideUrl(4757);
    const tmp23 = overrideUrl;
    const items = [_location];
    overrideUrl(9372).showModal(items);
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
    const obj16 = overrideUrl(9372);
  } else {
    if (platformType !== tmp.PLAYSTATION) {
      if (platformType !== tmp.PLAYSTATION_STAGING) {
        if (platformType === tmp.CRUNCHYROLL) {
          overrideUrl(4757).hideActionSheet();
          const obj11 = overrideUrl(4757);
          const tmp15 = overrideUrl;
          const items1 = [_location];
          overrideUrl(9414).showModal(items1);
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
          const obj12 = overrideUrl(9414);
        } else if (platformType === tmp.DOMAIN) {
          overrideUrl(4757).hideActionSheet();
          const obj8 = overrideUrl(4757);
          const tmp10 = overrideUrl;
          let obj = { locationStack: null };
          const items2 = [_location];
          obj.locationStack = items2;
          overrideUrl(4993).pushLazy(handleModalClose5(1984)(9425, dependencyMap.paths), obj);
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
          const obj9 = overrideUrl(4993);
        } else {
          value = overrideUrl(5534).get(platformType);
          let isFederated;
          if (value != null) {
            isFederated = value.isFederated;
          }
          if (true === isFederated) {
            tmp28(4757).hideActionSheet();
            const tmp28Result = tmp28(4757);
            const obj2 = { platformType, location: _location, successRedirect };
            tmp28(4993).pushLazy(handleModalClose5(1984)(9427, tmp29.paths), obj2);
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
            const tmp28Result4 = tmp28(4993);
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
                handleModalClose5(8678).handleClick(obj4);
                const obj3 = handleModalClose5(8678);
              }
            }
            const obj5 = { location: _location, successRedirect };
            const tmp28Result6 = tmp28(5657);
            tmp28(5657).authorize(platformType, obj5).then((body) => {
              const url = body.body.url;
              if (null != url) {
                overrideUrl(4487).openURL(url);
                const obj = overrideUrl(4487);
              }
            });
            const authorizeResult = tmp28(5657).authorize(platformType, obj5);
          }
          const obj18 = overrideUrl(5534);
          tmp29 = dependencyMap;
        }
      }
    }
    overrideUrl(4757).hideActionSheet();
    const obj13 = overrideUrl(4757);
    const tmp19 = overrideUrl;
    const items3 = [_location];
    overrideUrl(9403).showModal(items3, platformType);
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
    const obj14 = overrideUrl(9403);
  }
};
