// Module ID: 1595
// Function ID: 17782
// Dependencies: []

// Module 1595
let prop;
if (null != nativeFabricUIManager) {
  prop = nativeFabricUIManager.nativeFabricUIManager;
}
let obj = { color: true, tintColor: true, shadowColor: true, placeholderTextColor: true };
obj = { borderBottomEndRadius: true, borderBottomLeftRadius: true, borderBottomRightRadius: true, borderBottomStartRadius: true, borderRadius: true, borderTopEndRadius: true, borderTopLeftRadius: true, borderTopRightRadius: true, borderTopStartRadius: true };
obj = {};
let obj1 = obj;
if (null == prop) {
  obj1 = {};
}
let obj2 = obj;
if (null == prop) {
  obj2 = {};
}
obj.UI_THREAD_PROPS_WHITELIST = Object.assign({ opacity: true, transform: true, backgroundColor: true, borderRightColor: true, borderBottomColor: true, borderColor: true, borderEndColor: true, borderLeftColor: true, borderStartColor: true, borderTopColor: true, shadowOpacity: true, shadowRadius: true }, obj1, { scaleX: true, scaleY: true, translateX: true, translateY: true }, obj2);
if (null != prop) {
  obj = {};
}
if (null != prop) {
  obj = {};
}
obj.NATIVE_THREAD_PROPS_WHITELIST = Object.assign({ borderBottomWidth: true, borderEndWidth: true, borderLeftWidth: true, borderRightWidth: true, borderStartWidth: true, borderTopWidth: true, borderWidth: true, bottom: true, boxShadow: true, flex: true, flexGrow: true, flexShrink: true, height: true, left: true, margin: true, marginBottom: true, marginEnd: true, marginHorizontal: true, marginLeft: true, marginRight: true, marginStart: true, marginTop: true, marginVertical: true, maxHeight: true, maxWidth: true, minHeight: true, minWidth: true, padding: true, paddingBottom: true, paddingEnd: true, paddingHorizontal: true, paddingLeft: true, paddingRight: true, paddingStart: true, paddingTop: true, paddingVertical: true, right: true, start: true, top: true, width: true, zIndex: true, elevation: true, fontSize: true, lineHeight: true, textShadowRadius: true, textShadowOffset: true, letterSpacing: true, aspectRatio: true, columnGap: true, end: true, flexBasis: true, gap: true, rowGap: true, display: true, backfaceVisibility: true, overflow: true, resizeMode: true, fontStyle: true, fontWeight: true, textAlign: true, textDecorationLine: true, fontFamily: true, textAlignVertical: true, fontVariant: true, textDecorationStyle: true, textTransform: true, writingDirection: true, alignContent: true, alignItems: true, alignSelf: true, direction: true, flexDirection: true, flexWrap: true, justifyContent: true, position: true }, obj, obj);
arg5.PropsAllowlists = obj;
