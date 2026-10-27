// Module ID: 8816
// Function ID: 8817
// Dependencies: [8806, 5011, 8802, 8817]

// Module 8816
import normalizeColor from "normalizeColor" /* 8802 */;
import _mod8806 from "module_8806" /* 8806 */;
import _mod8817 from "module_8817" /* 8817 */;
import "module_5011";
import module_5011_mod from "module_5011" /* 5011 */;

let items1;
let module_5011;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5011.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5011.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5011.bool, spellCheck: module_5011.bool, autoFocus: module_5011.bool, allowFontScaling: module_5011.bool, maxFontSizeMultiplier: module_5011.number, editable: module_5011.bool, keyboardType: module_5011.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5011.oneOf(["default", "light", "dark"]), returnKeyType: module_5011.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5011.string, maxLength: module_5011.number, numberOfLines: module_5011.number, disableFullscreenUI: module_5011.bool, enablesReturnKeyAutomatically: module_5011.bool, multiline: module_5011.bool, textBreakStrategy: module_5011.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5011.func, onFocus: module_5011.func, onChange: module_5011.func, onChangeText: module_5011.func, onContentSizeChange: module_5011.func, onTextInput: module_5011.func, onEndEditing: module_5011.func, onSelectionChange: module_5011.func, onSubmitEditing: module_5011.func, onKeyPress: module_5011.func, onLayout: module_5011.func, onScroll: module_5011.func, placeholder: module_5011.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5011.bool, secureTextEntry: module_5011.bool, selectionColor: normalizeColor, selection: module_5011.shape(obj2), value: module_5011.string, defaultValue: module_5011.string, clearButtonMode: module_5011.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5011.bool, selectTextOnFocus: module_5011.bool, blurOnSubmit: module_5011.bool, style: _mod8817.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5011.string, inlineImagePadding: module_5011.number, rejectResponderTermination: module_5011.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5011.bool, contextMenuHidden: module_5011.bool, inputAccessoryViewID: module_5011.string, textContentType: module_5011.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5011.bool };
const module_8806 = Object.assign(_mod8806);
module_5011 = module_5011_mod;
obj2 = { start: module_5011.number.isRequired, end: module_5011.number };
module_5011 = module_5011_mod;
oneOfType = module_5011.oneOfType;
module_5011 = module_5011_mod;
items1 = [module_5011.oneOf(items), ];
module_5011 = module_5011_mod;
const arrayOf = module_5011.arrayOf;
module_5011 = module_5011_mod;
items1[1] = arrayOf(module_5011.oneOf(items));
module_5011 = module_5011_mod;

export default obj;
