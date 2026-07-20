// Module ID: 9229
// Function ID: 72194
// Name: CountrySelectModal
// Dependencies: []
// Exports: default

// Module 9229 (CountrySelectModal)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/verification/native/components/CountrySelectModal.tsx");

export default function CountrySelectModal() {
  const screens = React.useMemo(() => function getScreens() {
    let obj = {};
    obj = {};
    const intl = callback(closure_2[2]).intl;
    obj.title = intl.string(callback(closure_2[2]).t.gzXECH);
    obj.headerLeft = callback(closure_2[3]).getHeaderCloseButton(callback2(closure_2[4]).pop);
    obj.render = function render() {
      return callback2(callback(closure_2[5]), {
        onClose() {
          return callback(closure_2[4]).pop();
        },
        onCountrySelected(countryCode) {
          return callback(closure_2[6]).setCountryCode(countryCode);
        }
      });
    };
    obj.COUNTRY_SELECT = obj;
    return obj;
  }(), []);
  const effect = React.useEffect(() => () => {
    callback(closure_2[7]).runAfterInteractions(callback(closure_2[8]).setCountrySelectorClosed, 400);
  }, []);
  return jsx(arg1(dependencyMap[9]).Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};
