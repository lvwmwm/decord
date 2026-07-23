// Module ID: 27
// Function ID: 1110
// Name: get ActivityIndicator
// Dependencies: [28, 280, 293, 302, 319, 329, 330, 332, 335, 337, 407, 157, 35, 409, 412, 340, 399, 295, 413, 289, 114, 416, 417, 421, 281, 422, 423, 112, 424, 425, 426, 428, 431, 231, 390, 434, 243, 437, 246, 441, 116, 444, 101, 446, 447, 448, 97, 449, 355, 117, 404, 359, 334, 333, 450, 453, 238, 232, 209, 56, 208, 454, 456, 96, 262, 40, 459, 38, 236, 445, 252, 462, 464, 253, 69, 467, 55, 46, 470, 471, 331, 472, 473]

// Module 27 (get ActivityIndicator)
const obj = {};
Object.defineProperty(obj, "ActivityIndicator", { get: () => require(28) /* ActivityIndicator */.default, set: undefined });
Object.defineProperty(obj, "Button", { get: () => require(280) /* Button */.default, set: undefined });
Object.defineProperty(obj, "DrawerLayoutAndroid", { get: () => require(293) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "FlatList", { get: () => require(302) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "Image", { get: () => require(319) /* prefetch */.default, set: undefined });
Object.defineProperty(obj, "ImageBackground", { get: () => require(329) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "InputAccessoryView", { get: () => require(330) /* InputAccessoryView */.default, set: undefined });
Object.defineProperty(obj, "KeyboardAvoidingView", { get: () => require(332) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "experimental_LayoutConformance", { get: () => require(335).default, set: undefined });
Object.defineProperty(obj, "Modal", { get: () => require(337) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "Pressable", { get: () => require(407) /* Pressable */.default, set: undefined });
Object.defineProperty(obj, "ProgressBarAndroid", {
  get: () => {
    require(157) /* warnOnce */.default("progress-bar-android-moved", "ProgressBarAndroid has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/progress-bar-android' instead of 'react-native'. See https://github.com/react-native-progress-view/progress-bar-android");
    return require(35) /* ProgressBarAndroid */.default;
  },
  set: undefined
});
Object.defineProperty(obj, "RefreshControl", { get: () => require(409) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "SafeAreaView", {
  get: () => {
    require(157) /* warnOnce */.default("safe-area-view-deprecated", "SafeAreaView has been deprecated and will be removed in a future release. Please use 'react-native-safe-area-context' instead. See https://github.com/th3rdwave/react-native-safe-area-context");
    return require(412) /* result */.default;
  },
  set: undefined
});
Object.defineProperty(obj, "ScrollView", { get: () => require(340) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "SectionList", { get: () => require(399) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "StatusBar", { get: () => require(295) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "Switch", { get: () => require(413) /* returnsFalse */.default, set: undefined });
Object.defineProperty(obj, "Text", { get: () => require(289) /* useTextPressability */.default, set: undefined });
Object.defineProperty(obj, "unstable_TextAncestorContext", { get: () => require(114) /* result */.default, set: undefined });
Object.defineProperty(obj, "TextInput", { get: () => require(416) /* InternalTextInput */.default, set: undefined });
Object.defineProperty(obj, "Touchable", { get: () => require(417) /* extractSingleTouch */.default, set: undefined });
Object.defineProperty(obj, "TouchableHighlight", { get: () => require(421) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "TouchableNativeFeedback", { get: () => require(281) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "TouchableOpacity", { get: () => require(422) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "TouchableWithoutFeedback", { get: () => require(423) /* TouchableWithoutFeedback */.default, set: undefined });
Object.defineProperty(obj, "View", { get: () => require(112) /* View */.default, set: undefined });
Object.defineProperty(obj, "VirtualizedList", { get: () => require(424) /* get VirtualizedList */.default, set: undefined });
Object.defineProperty(obj, "VirtualizedSectionList", { get: () => require(425) /* get VirtualizedList */.default, set: undefined });
Object.defineProperty(obj, "unstable_VirtualView", { get: () => require(426) /* createVirtualView */.default, set: undefined });
Object.defineProperty(obj, "AccessibilityInfo", { get: () => require(428) /* map */.default, set: undefined });
Object.defineProperty(obj, "ActionSheetIOS", { get: () => require(431) /* showActionSheetWithOptions */.default, set: undefined });
Object.defineProperty(obj, "Alert", { get: () => require(231) /* Alert */.default, set: undefined });
Object.defineProperty(obj, "Animated", { get: () => require(390) /* get FlatList */.default, set: undefined });
Object.defineProperty(obj, "Appearance", { get: () => require(434) /* getState */, set: undefined });
Object.defineProperty(obj, "AppRegistry", { get: () => require(243) /* AppRegistry */.AppRegistry, set: undefined });
Object.defineProperty(obj, "AppState", { get: () => require(437) /* AppStateImpl */.default, set: undefined });
Object.defineProperty(obj, "BackHandler", { get: () => require(246).default, set: undefined });
Object.defineProperty(obj, "Clipboard", {
  get: () => {
    require(157) /* warnOnce */.default("clipboard-moved", "Clipboard has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-clipboard/clipboard' instead of 'react-native'. See https://github.com/react-native-clipboard/clipboard");
    return require(441) /* Clipboard */.default;
  },
  set: undefined
});
Object.defineProperty(obj, "codegenNativeCommands", { get: () => require(116) /* codegenNativeCommands */.default, set: undefined });
Object.defineProperty(obj, "codegenNativeComponent", { get: () => require(444) /* codegenNativeComponent */.default, set: undefined });
Object.defineProperty(obj, "DeviceEventEmitter", { get: () => require(101) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "DeviceInfo", { get: () => require(446) /* getConstants */.default, set: undefined });
Object.defineProperty(obj, "DevMenu", { get: () => require(447).default, set: undefined });
Object.defineProperty(obj, "DevSettings", { get: () => require(448).default, set: undefined });
Object.defineProperty(obj, "Dimensions", { get: () => require(97) /* Dimensions */.default, set: undefined });
Object.defineProperty(obj, "DynamicColorIOS", { get: () => require(449) /* DynamicColorIOS */.DynamicColorIOS, set: undefined });
Object.defineProperty(obj, "Easing", { get: () => require(355) /* A */.default, set: undefined });
Object.defineProperty(obj, "findNodeHandle", { get: () => require(117) /* renderElement */.findNodeHandle, set: undefined });
Object.defineProperty(obj, "I18nManager", { get: () => require(404) /* I18nManager */.default, set: undefined });
Object.defineProperty(obj, "InteractionManager", { get: () => require(359) /* _scheduleUpdate */.default, set: undefined });
Object.defineProperty(obj, "Keyboard", { get: () => require(334) /* KeyboardImpl */.default, set: undefined });
Object.defineProperty(obj, "LayoutAnimation", { get: () => require(333) /* configureNext */.default, set: undefined });
Object.defineProperty(obj, "Linking", { get: () => require(450) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "LogBox", { get: () => require(453) /* install */.default, set: undefined });
Object.defineProperty(obj, "NativeAppEventEmitter", { get: () => require(238) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "NativeDialogManagerAndroid", { get: () => require(232) /* DialogManagerAndroid */.default, set: undefined });
Object.defineProperty(obj, "NativeEventEmitter", { get: () => require(209) /* NativeEventEmitter */.default, set: undefined });
Object.defineProperty(obj, "NativeModules", { get: () => require(56) /* genModule */.default, set: undefined });
Object.defineProperty(obj, "Networking", { get: () => require(208) /* convertHeadersMapToArray */.default, set: undefined });
Object.defineProperty(obj, "PanResponder", { get: () => require(454) /* clearInteractionHandle */.default, set: undefined });
Object.defineProperty(obj, "PermissionsAndroid", { get: () => require(456) /* PermissionsAndroidImpl */.default, set: undefined });
Object.defineProperty(obj, "PixelRatio", { get: () => require(96) /* PixelRatio */.default, set: undefined });
Object.defineProperty(obj, "Platform", { get: () => require(262) /* get Version */.default, set: undefined });
Object.defineProperty(obj, "PlatformColor", { get: () => require(40) /* PlatformColor */.PlatformColor, set: undefined });
Object.defineProperty(obj, "PushNotificationIOS", {
  get: () => {
    require(157) /* warnOnce */.default("pushNotificationIOS-moved", "PushNotificationIOS has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/push-notification-ios' instead of 'react-native'. See https://github.com/react-native-push-notification/ios");
    return require(459) /* map */.default;
  },
  set: undefined
});
Object.defineProperty(obj, "processColor", { get: () => require(38) /* processColor */.default, set: undefined });
Object.defineProperty(obj, "registerCallableModule", { get: () => require(236) /* MessageQueue */.default, set: undefined });
Object.defineProperty(obj, "requireNativeComponent", { get: () => require(445) /* requireNativeComponent */.default, set: undefined });
Object.defineProperty(obj, "RootTagContext", { get: () => require(252) /* RootTagContext */.RootTagContext, set: undefined });
Object.defineProperty(obj, "Settings", { get: () => require(462).default, set: undefined });
Object.defineProperty(obj, "Share", { get: () => require(464) /* Share */.default, set: undefined });
Object.defineProperty(obj, "StyleSheet", { get: () => require(253) /* setStyleAttributePreprocessor */.default, set: undefined });
Object.defineProperty(obj, "Systrace", { get: () => require(69) /* isEnabled */, set: undefined });
Object.defineProperty(obj, "ToastAndroid", { get: () => require(467) /* SHORT */.default, set: undefined });
Object.defineProperty(obj, "TurboModuleRegistry", { get: () => require(55) /* requireModule */, set: undefined });
Object.defineProperty(obj, "UIManager", { get: () => require(46) /* isFabricReactTag */.default, set: undefined });
Object.defineProperty(obj, "unstable_batchedUpdates", { get: () => require(117) /* renderElement */.unstable_batchedUpdates, set: undefined });
Object.defineProperty(obj, "useAnimatedValue", { get: () => require(470) /* useAnimatedValue */.default, set: undefined });
Object.defineProperty(obj, "useColorScheme", { get: () => require(471) /* subscribe */.default, set: undefined });
Object.defineProperty(obj, "useWindowDimensions", { get: () => require(331) /* useWindowDimensions */.default, set: undefined });
Object.defineProperty(obj, "UTFSequence", { get: () => require(472) /* deepFreezeAndThrowOnMutationInDev */.default, set: undefined });
Object.defineProperty(obj, "Vibration", { get: () => require(473) /* Vibration */.default, set: undefined });
Object.defineProperty(obj, "VirtualViewMode", { get: () => require(426) /* createVirtualView */.VirtualViewMode, set: undefined });

export default obj;
