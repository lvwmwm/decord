// Module ID: 8814
// Function ID: 8815
// Dependencies: [8804, 5008, 8800, 8815]

// Module 8814
import normalizeColor from "normalizeColor" /* 8800 */;
import _mod8804 from "module_8804" /* 8804 */;
import _mod8815 from "module_8815" /* 8815 */;
import "module_5008";
import module_5008_mod from "module_5008" /* 5008 */;

let items1;
let module_5008;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5008.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5008.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5008.bool, spellCheck: module_5008.bool, autoFocus: module_5008.bool, allowFontScaling: module_5008.bool, maxFontSizeMultiplier: module_5008.number, editable: module_5008.bool, keyboardType: module_5008.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5008.oneOf(["default", "light", "dark"]), returnKeyType: module_5008.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5008.string, maxLength: module_5008.number, numberOfLines: module_5008.number, disableFullscreenUI: module_5008.bool, enablesReturnKeyAutomatically: module_5008.bool, multiline: module_5008.bool, textBreakStrategy: module_5008.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5008.func, onFocus: module_5008.func, onChange: module_5008.func, onChangeText: module_5008.func, onContentSizeChange: module_5008.func, onTextInput: module_5008.func, onEndEditing: module_5008.func, onSelectionChange: module_5008.func, onSubmitEditing: module_5008.func, onKeyPress: module_5008.func, onLayout: module_5008.func, onScroll: module_5008.func, placeholder: module_5008.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5008.bool, secureTextEntry: module_5008.bool, selectionColor: normalizeColor, selection: module_5008.shape(obj2), value: module_5008.string, defaultValue: module_5008.string, clearButtonMode: module_5008.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5008.bool, selectTextOnFocus: module_5008.bool, blurOnSubmit: module_5008.bool, style: _mod8815.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5008.string, inlineImagePadding: module_5008.number, rejectResponderTermination: module_5008.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5008.bool, contextMenuHidden: module_5008.bool, inputAccessoryViewID: module_5008.string, textContentType: module_5008.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5008.bool };
const module_8804 = Object.assign(_mod8804);
module_5008 = module_5008_mod;
obj2 = { start: module_5008.number.isRequired, end: module_5008.number };
module_5008 = module_5008_mod;
oneOfType = module_5008.oneOfType;
module_5008 = module_5008_mod;
items1 = [module_5008.oneOf(items), ];
module_5008 = module_5008_mod;
const arrayOf = module_5008.arrayOf;
module_5008 = module_5008_mod;
items1[1] = arrayOf(module_5008.oneOf(items));
module_5008 = module_5008_mod;

export default obj;
