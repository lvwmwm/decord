// Module ID: 14512
// Function ID: 109312
// Name: BackButton
// Dependencies: []
// Exports: default

// Module 14512 (BackButton)
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  const require = props.props;
  let obj = require(dependencyMap[1]);
  const importDefault = obj.useNavigation();
  obj = { variant: "secondary" };
  const intl = require(dependencyMap[3]).intl;
  obj.text = intl.string(require(dependencyMap[3]).t.Tot4EC);
  obj.onPress = function onPress() {

  };
  return jsx(importDefault(dependencyMap[2]), obj);
};
