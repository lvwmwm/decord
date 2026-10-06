// Module ID: 7780
// Function ID: 7781
// Dependencies: [7770, 4665, 7766, 7781]

// Module 7780
import normalizeColor from "normalizeColor" /* 7766 */;
import _mod7770 from "module_7770" /* 7770 */;
import _mod7781 from "module_7781" /* 7781 */;
import "module_4665";
import module_4665_mod from "module_4665" /* 4665 */;

let items1;
let module_4665;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_4665.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_4665.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_4665.bool, spellCheck: module_4665.bool, autoFocus: module_4665.bool, allowFontScaling: module_4665.bool, maxFontSizeMultiplier: module_4665.number, editable: module_4665.bool, keyboardType: module_4665.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_4665.oneOf(["default", "light", "dark"]), returnKeyType: module_4665.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_4665.string, maxLength: module_4665.number, numberOfLines: module_4665.number, disableFullscreenUI: module_4665.bool, enablesReturnKeyAutomatically: module_4665.bool, multiline: module_4665.bool, textBreakStrategy: module_4665.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_4665.func, onFocus: module_4665.func, onChange: module_4665.func, onChangeText: module_4665.func, onContentSizeChange: module_4665.func, onTextInput: module_4665.func, onEndEditing: module_4665.func, onSelectionChange: module_4665.func, onSubmitEditing: module_4665.func, onKeyPress: module_4665.func, onLayout: module_4665.func, onScroll: module_4665.func, placeholder: module_4665.string, placeholderTextColor: normalizeColor, scrollEnabled: module_4665.bool, secureTextEntry: module_4665.bool, selectionColor: normalizeColor, selection: module_4665.shape(obj2), value: module_4665.string, defaultValue: module_4665.string, clearButtonMode: module_4665.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_4665.bool, selectTextOnFocus: module_4665.bool, blurOnSubmit: module_4665.bool, style: _mod7781.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_4665.string, inlineImagePadding: module_4665.number, rejectResponderTermination: module_4665.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_4665.bool, contextMenuHidden: module_4665.bool, inputAccessoryViewID: module_4665.string, textContentType: module_4665.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_4665.bool };
const module_7770 = Object.assign(_mod7770);
module_4665 = module_4665_mod;
obj2 = { start: module_4665.number.isRequired, end: module_4665.number };
module_4665 = module_4665_mod;
oneOfType = module_4665.oneOfType;
module_4665 = module_4665_mod;
items1 = [module_4665.oneOf(items), ];
module_4665 = module_4665_mod;
const arrayOf = module_4665.arrayOf;
module_4665 = module_4665_mod;
items1[1] = arrayOf(module_4665.oneOf(items));
module_4665 = module_4665_mod;

export default obj;
