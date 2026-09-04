// Module ID: 9181
// Function ID: 9182
// Name: authorizeConnection
// Dependencies: [5369, 673, 706, 4448, 9146, 9182, 9199, 4731, 9210, 2008, 5244, 9212, 8300, 4190, 5367, 2]
// Exports: default

// Module 9181 (authorizeConnection)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import OperatorTypes from "OperatorTypes" /* 5369 */;

let closure_3 = OperatorTypes.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
const PlatformTypes = ME.PlatformTypes;
const result = set.fileFinishedImporting("modules/connections/authorizeConnection.native.tsx");

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
    overrideUrl(4448).hideActionSheet();
    const obj15 = overrideUrl(4448);
    const tmp23 = overrideUrl;
    const items = [_location];
    overrideUrl(9146).showModal(items);
    if (null != onClose) {
      function handleModalClose(arg0) {
        if (handleModalClose5 != null) {
          tmp();
        }
        dispatcherDefault.unsubscribe("MODAL_POP", handleModalClose5);
      }
      handleModalClose5 = handleModalClose;
      const subscription = tmp23(706).subscribe("MODAL_POP", handleModalClose);
      const tmp23Result = tmp23(706);
    }
    const obj16 = overrideUrl(9146);
  } else {
    if (platformType !== tmp.PLAYSTATION) {
      if (platformType !== tmp.PLAYSTATION_STAGING) {
        if (platformType === tmp.CRUNCHYROLL) {
          overrideUrl(4448).hideActionSheet();
          const obj11 = overrideUrl(4448);
          const tmp15 = overrideUrl;
          const items1 = [_location];
          overrideUrl(9199).showModal(items1);
          if (null != onClose) {
            const handleModalClose4 = function handleModalClose(arg0) {
              if (handleModalClose5 != null) {
                tmp();
              }
              dispatcherDefault.unsubscribe("MODAL_POP", handleModalClose5);
            };
            handleModalClose5 = handleModalClose4;
            const subscription1 = tmp15(706).subscribe("MODAL_POP", handleModalClose4);
            const tmp15Result = tmp15(706);
          }
          const obj12 = overrideUrl(9199);
        } else if (platformType === tmp.DOMAIN) {
          overrideUrl(4448).hideActionSheet();
          const obj8 = overrideUrl(4448);
          const tmp10 = overrideUrl;
          let obj = { locationStack: null };
          const items2 = [_location];
          obj[0] = items2;
          overrideUrl(4731).pushLazy(handleModalClose5(2008)(9210, dependencyMap.paths), obj);
          if (null != onClose) {
            const handleModalClose3 = function handleModalClose(arg0) {
              if (handleModalClose5 != null) {
                tmp();
              }
              dispatcherDefault.unsubscribe("MODAL_POP", handleModalClose5);
            };
            handleModalClose5 = handleModalClose3;
            const subscription2 = tmp10(706).subscribe("MODAL_POP", handleModalClose3);
            const tmp10Result = tmp10(706);
          }
          const obj9 = overrideUrl(4731);
        } else {
          const value = overrideUrl(5244).get(platformType);
          let isFederated;
          if (value != null) {
            isFederated = value.isFederated;
          }
          if (true === isFederated) {
            let tmp28Result = tmp28(4448);
            tmp28Result.hideActionSheet();
            tmp28Result = tmp28(4731);
            obj = { platformType: null, location: null, successRedirect: null };
            obj[0] = platformType;
            obj[1] = _location;
            obj[2] = successRedirect;
            tmp28Result.pushLazy(handleModalClose5(2008)(9212, tmp29.paths), obj);
            if (null != onClose) {
              const handleModalClose2 = function handleModalClose(arg0) {
                if (handleModalClose5 != null) {
                  tmp();
                }
                dispatcherDefault.unsubscribe("MODAL_POP", handleModalClose5);
              };
              handleModalClose5 = handleModalClose2;
              const subscription3 = tmp28(706).subscribe("MODAL_POP", handleModalClose2);
              const tmp28Result1 = tmp28(706);
            }
          } else {
            if (null != overrideUrl) {
              if (platformType === closure_3) {
                let obj2 = handleModalClose5(8300);
                obj1 = { shouldConfirm: true, href: null, onConfirm: null };
                obj1[1] = overrideUrl;
                obj1[2] = function onConfirm() {
                  overrideUrl(closure_1_2[13]).openURL(overrideUrl);
                };
                obj2.handleClick(obj1);
              }
            }
            obj2 = { location: null, successRedirect: null };
            obj2[0] = _location;
            obj2[1] = successRedirect;
            const tmp28Result2 = tmp28(5367);
            tmp28(5367).authorize(platformType, obj2).then((body) => {
              const url = body.body.url;
              if (null != url) {
                overrideUrl(table[13]).openURL(url);
                const obj = overrideUrl(table[13]);
              }
            });
            const authorizeResult = tmp28(5367).authorize(platformType, obj2);
          }
          const obj18 = overrideUrl(5244);
          tmp29 = dependencyMap;
        }
      }
    }
    overrideUrl(4448).hideActionSheet();
    const obj13 = overrideUrl(4448);
    const tmp19 = overrideUrl;
    const items3 = [_location];
    overrideUrl(9182).showModal(items3, platformType);
    if (null != onClose) {
      handleModalClose5 = function handleModalClose(arg0) {
        if (handleModalClose5 != null) {
          tmp();
        }
        dispatcherDefault.unsubscribe("MODAL_POP", handleModalClose5);
      };
      const subscription4 = tmp19(706).subscribe("MODAL_POP", handleModalClose5);
      const tmp19Result = tmp19(706);
    }
    const obj14 = overrideUrl(9182);
  }
};
