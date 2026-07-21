// Module ID: 8962
// Function ID: 70686
// Name: authorizeConnection
// Dependencies: []
// Exports: default

// Module 8962 (authorizeConnection)
let closure_3 = require(dependencyMap[0]).GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
const PlatformTypes = require(dependencyMap[1]).PlatformTypes;
const _module = require(dependencyMap[15]);
const result = _module.fileFinishedImporting("modules/connections/authorizeConnection.native.tsx");

export default function authorizeConnection(successRedirect) {
  let _location;
  let overrideUrl;
  let platformType;
  ({ platformType, location: _location, onClose: closure_0, overrideUrl } = successRedirect);
  const importDefault = overrideUrl;
  successRedirect = successRedirect.successRedirect;
  function registerHandleModalClose() {
    if (null != handleModalClose) {
      function handleModalClose() {
        if (null != handleModalClose) {
          handleModalClose();
        }
        callback(closure_2[2]).unsubscribe("MODAL_POP", handleModalClose);
      }
      const subscription = overrideUrl(closure_2[2]).subscribe("MODAL_POP", handleModalClose);
      const obj = overrideUrl(closure_2[2]);
    }
  }
  if (platformType === PlatformTypes.LEAGUE_OF_LEGENDS) {
    platformType = PlatformTypes.RIOT_GAMES;
  }
  if (null == _location) {
    _location = "mobile";
  }
  if (platformType === PlatformTypes.XBOX) {
    importDefault(dependencyMap[3]).hideActionSheet();
    const obj15 = importDefault(dependencyMap[3]);
    const items = [_location];
    importDefault(dependencyMap[4]).showModal(items);
    const result = registerHandleModalClose();
    const obj16 = importDefault(dependencyMap[4]);
  } else {
    if (platformType !== PlatformTypes.PLAYSTATION) {
      if (platformType !== PlatformTypes.PLAYSTATION_STAGING) {
        if (platformType === PlatformTypes.CRUNCHYROLL) {
          importDefault(dependencyMap[3]).hideActionSheet();
          const obj11 = importDefault(dependencyMap[3]);
          const items1 = [_location];
          importDefault(dependencyMap[6]).showModal(items1);
          const result1 = registerHandleModalClose();
          const obj12 = importDefault(dependencyMap[6]);
        } else if (platformType === PlatformTypes.DOMAIN) {
          importDefault(dependencyMap[3]).hideActionSheet();
          const obj8 = importDefault(dependencyMap[3]);
          let obj = {};
          const items2 = [_location];
          obj.locationStack = items2;
          importDefault(dependencyMap[7]).pushLazy(require(dependencyMap[9])(dependencyMap[8], dependencyMap.paths), obj);
          const result2 = registerHandleModalClose();
          const obj9 = importDefault(dependencyMap[7]);
        } else {
          const value = importDefault(dependencyMap[10]).get(platformType);
          let isFederated;
          if (null != value) {
            isFederated = value.isFederated;
          }
          if (true === isFederated) {
            importDefault(dependencyMap[3]).hideActionSheet();
            const obj5 = importDefault(dependencyMap[3]);
            obj = { platformType, location: _location, successRedirect };
            importDefault(dependencyMap[7]).pushLazy(require(dependencyMap[9])(dependencyMap[11], dependencyMap.paths), obj);
            const result3 = registerHandleModalClose();
            const obj6 = importDefault(dependencyMap[7]);
          } else {
            if (null != overrideUrl) {
              if (platformType === closure_3) {
                let obj2 = require(dependencyMap[12]);
                const obj1 = {
                  shouldConfirm: true,
                  href: overrideUrl,
                  onConfirm() {
                                  overrideUrl(closure_2[13]).openURL(overrideUrl);
                                }
                };
                obj2.handleClick(obj1);
              }
            }
            obj = importDefault(dependencyMap[14]);
            obj2 = { location: _location, successRedirect };
            obj.authorize(platformType, obj2).then((body) => {
              const url = body.body.url;
              if (null != url) {
                overrideUrl(closure_2[13]).openURL(url);
                const obj = overrideUrl(closure_2[13]);
              }
            });
            const authorizeResult = obj.authorize(platformType, obj2);
          }
          const obj17 = importDefault(dependencyMap[10]);
        }
      }
    }
    importDefault(dependencyMap[3]).hideActionSheet();
    const obj13 = importDefault(dependencyMap[3]);
    const items3 = [_location];
    importDefault(dependencyMap[5]).showModal(items3, platformType);
    const result4 = registerHandleModalClose();
    const obj14 = importDefault(dependencyMap[5]);
  }
};
