// Module ID: 8285
// Function ID: 65430
// Name: lerpVarWidthThumbnailScrollBounds
// Dependencies: []

// Module 8285 (lerpVarWidthThumbnailScrollBounds)
let closure_0 = { code: "function lerpVarWidthThumbnailScrollBounds_portraitThumbnailHelpersTsx1(positions,position){if(positions.length===0)return 0;if(position<0){return 0;}if(position>=positions.length){position=positions.length;}const index=Math.floor(position);const fraction=position-index;if(index>=positions.length){return positions[positions.length-1].scrollStart;}const startPos=positions[index].scrollStart;const endPos=index<positions.length-1?positions[index+1].scrollStart:startPos;return startPos+fraction*(endPos-startPos);}" };
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/media_viewer/native/portraitThumbnailHelpers.tsx");

export const lerpVarWidthThumbnailScrollBounds = () => {
  function lerpVarWidthThumbnailScrollBounds(arg0, arg1) {
    let length = arg1;
    if (0 === arg0.length) {
      return 0;
    } else if (length < 0) {
      return 0;
    } else {
      if (length >= arg0.length) {
        length = arg0.length;
      }
      const _Math = Math;
      const rounded = Math.floor(length);
      if (rounded >= arg0.length) {
        return arg0[arg0.length - 1].scrollStart;
      } else {
        const scrollStart = arg0[rounded].scrollStart;
        let scrollStart2 = scrollStart;
        if (rounded < arg0.length - 1) {
          scrollStart2 = arg0[rounded + 1].scrollStart;
        }
        return scrollStart + tmp3 * (scrollStart2 - scrollStart);
      }
    }
  }
  lerpVarWidthThumbnailScrollBounds.__closure = {};
  lerpVarWidthThumbnailScrollBounds.__workletHash = 5256874583737;
  lerpVarWidthThumbnailScrollBounds.__initData = closure_0;
  return lerpVarWidthThumbnailScrollBounds;
}();
