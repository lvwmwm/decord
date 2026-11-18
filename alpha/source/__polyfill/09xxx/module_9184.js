// Module ID: 9184
// Function ID: 9185
// Dependencies: [9174, 4864, 9170, 9185]

// Module 9184
import normalizeColor from "normalizeColor" /* 9170 */;
import _mod9174 from "module_9174" /* 9174 */;
import _mod9185 from "module_9185" /* 9185 */;
import "module_4864";
import module_4864_mod from "module_4864" /* 4864 */;

let items1;
let module_4864;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_4864.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_4864.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_4864.bool, spellCheck: module_4864.bool, autoFocus: module_4864.bool, allowFontScaling: module_4864.bool, maxFontSizeMultiplier: module_4864.number, editable: module_4864.bool, keyboardType: module_4864.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_4864.oneOf(["default", "light", "dark"]), returnKeyType: module_4864.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_4864.string, maxLength: module_4864.number, numberOfLines: module_4864.number, disableFullscreenUI: module_4864.bool, enablesReturnKeyAutomatically: module_4864.bool, multiline: module_4864.bool, textBreakStrategy: module_4864.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_4864.func, onFocus: module_4864.func, onChange: module_4864.func, onChangeText: module_4864.func, onContentSizeChange: module_4864.func, onTextInput: module_4864.func, onEndEditing: module_4864.func, onSelectionChange: module_4864.func, onSubmitEditing: module_4864.func, onKeyPress: module_4864.func, onLayout: module_4864.func, onScroll: module_4864.func, placeholder: module_4864.string, placeholderTextColor: normalizeColor, scrollEnabled: module_4864.bool, secureTextEntry: module_4864.bool, selectionColor: normalizeColor, selection: module_4864.shape(obj2), value: module_4864.string, defaultValue: module_4864.string, clearButtonMode: module_4864.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_4864.bool, selectTextOnFocus: module_4864.bool, blurOnSubmit: module_4864.bool, style: _mod9185.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_4864.string, inlineImagePadding: module_4864.number, rejectResponderTermination: module_4864.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_4864.bool, contextMenuHidden: module_4864.bool, inputAccessoryViewID: module_4864.string, textContentType: module_4864.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_4864.bool };
const module_9174 = Object.assign(_mod9174);
module_4864 = module_4864_mod;
obj2 = { start: module_4864.number.isRequired, end: module_4864.number };
module_4864 = module_4864_mod;
oneOfType = module_4864.oneOfType;
module_4864 = module_4864_mod;
items1 = [module_4864.oneOf(items), ];
module_4864 = module_4864_mod;
const arrayOf = module_4864.arrayOf;
module_4864 = module_4864_mod;
items1[1] = arrayOf(module_4864.oneOf(items));
module_4864 = module_4864_mod;

export default obj;
