// Module ID: 9756
// Function ID: 9757
// Dependencies: [9746, 5357, 9742, 9757]

// Module 9756
import normalizeColor from "normalizeColor" /* 9742 */;
import _mod9746 from "module_9746" /* 9746 */;
import _mod9757 from "module_9757" /* 9757 */;
import "module_5357";
import module_5357_mod from "module_5357" /* 5357 */;

let items1;
let module_5357;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5357.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5357.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5357.bool, spellCheck: module_5357.bool, autoFocus: module_5357.bool, allowFontScaling: module_5357.bool, maxFontSizeMultiplier: module_5357.number, editable: module_5357.bool, keyboardType: module_5357.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5357.oneOf(["default", "light", "dark"]), returnKeyType: module_5357.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5357.string, maxLength: module_5357.number, numberOfLines: module_5357.number, disableFullscreenUI: module_5357.bool, enablesReturnKeyAutomatically: module_5357.bool, multiline: module_5357.bool, textBreakStrategy: module_5357.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5357.func, onFocus: module_5357.func, onChange: module_5357.func, onChangeText: module_5357.func, onContentSizeChange: module_5357.func, onTextInput: module_5357.func, onEndEditing: module_5357.func, onSelectionChange: module_5357.func, onSubmitEditing: module_5357.func, onKeyPress: module_5357.func, onLayout: module_5357.func, onScroll: module_5357.func, placeholder: module_5357.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5357.bool, secureTextEntry: module_5357.bool, selectionColor: normalizeColor, selection: module_5357.shape(obj2), value: module_5357.string, defaultValue: module_5357.string, clearButtonMode: module_5357.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5357.bool, selectTextOnFocus: module_5357.bool, blurOnSubmit: module_5357.bool, style: _mod9757.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5357.string, inlineImagePadding: module_5357.number, rejectResponderTermination: module_5357.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5357.bool, contextMenuHidden: module_5357.bool, inputAccessoryViewID: module_5357.string, textContentType: module_5357.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5357.bool };
const module_9746 = Object.assign(_mod9746);
module_5357 = module_5357_mod;
obj2 = { start: module_5357.number.isRequired, end: module_5357.number };
module_5357 = module_5357_mod;
oneOfType = module_5357.oneOfType;
module_5357 = module_5357_mod;
items1 = [module_5357.oneOf(items), ];
module_5357 = module_5357_mod;
const arrayOf = module_5357.arrayOf;
module_5357 = module_5357_mod;
items1[1] = arrayOf(module_5357.oneOf(items));
module_5357 = module_5357_mod;

export default obj;
