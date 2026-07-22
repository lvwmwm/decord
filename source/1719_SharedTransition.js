// Module ID: 1719
// Function ID: 19325
// Name: SharedTransition
// Dependencies: []

// Module 1719 (SharedTransition)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = [true, true, true, true, true, true, true, true, true, true];
let closure_6 = { code: "function pnpm_SharedTransitionTs1(viewTag,values,progress){const{progressAnimationCallback}=this.__closure;const newStyles=progressAnimationCallback(values,progress);global._notifyAboutProgress(viewTag,newStyles,true);}" };
let closure_7 = { code: "function pnpm_SharedTransitionTs2(values){const{animationFactory,SUPPORTED_PROPS,withTiming,reduceMotion,transitionDuration}=this.__closure;let animations={};const initialValues={};if(animationFactory){animations=animationFactory(values);for(const key in animations){if(!SUPPORTED_PROPS.includes(key)){throw new ReanimatedError(\"The prop '\"+key+\"' is not supported yet.\");}}}else{for(const propName of SUPPORTED_PROPS){if(propName==='transform'){const matrix=values.targetTransformMatrix;animations.transformMatrix=withTiming(matrix,{reduceMotion:reduceMotion,duration:transitionDuration});}else{const capitalizedPropName=\"\"+propName.charAt(0).toUpperCase()+propName.slice(1);const keyToTargetValue=\"target\"+capitalizedPropName;animations[propName]=withTiming(values[keyToTargetValue],{reduceMotion:reduceMotion,duration:transitionDuration});}}}for(const propName in animations){if(propName==='transform'){initialValues.transformMatrix=values.currentTransformMatrix;}else{const capitalizedPropName=propName.charAt(0).toUpperCase()+propName.slice(1);const keyToCurrentValue=\"current\"+capitalizedPropName;initialValues[propName]=values[keyToCurrentValue];}}return{initialValues:initialValues,animations:animations};}" };
let closure_8 = { code: "function pnpm_SharedTransitionTs3(viewTag,values,progress){const{SUPPORTED_PROPS}=this.__closure;const newStyles={};for(const propertyName of SUPPORTED_PROPS){if(propertyName==='transform'){const currentMatrix=values.currentTransformMatrix;const targetMatrix=values.targetTransformMatrix;const newMatrix=new Array(9);for(let i=0;i<9;i++){newMatrix[i]=progress*(targetMatrix[i]-currentMatrix[i])+currentMatrix[i];}newStyles.transformMatrix=newMatrix;}else{const PropertyName=propertyName.charAt(0).toUpperCase()+propertyName.slice(1);const currentPropertyName=\"current\"+PropertyName;const targetPropertyName=\"target\"+PropertyName;const currentValue=values[currentPropertyName];const targetValue=values[targetPropertyName];newStyles[propertyName]=progress*(targetValue-currentValue)+currentValue;}}global._notifyAboutProgress(viewTag,newStyles,true);}" };
const tmp2 = () => {
  class SharedTransition {
    constructor() {
      tmp = closure_3(this, SharedTransition);
      this._customAnimationFactory = null;
      this._animation = null;
      this._transitionDuration = 500;
      this._reduceMotion = closure_1(closure_2[2]).ReduceMotion.System;
      this._customProgressAnimation = undefined;
      this._progressAnimation = undefined;
      this._defaultTransitionType = undefined;
      return;
    }
  }
  const global = SharedTransition;
  let obj = {
    key: "custom",
    value: function custom(_customAnimationFactory) {
      this._customAnimationFactory = _customAnimationFactory;
      return this;
    }
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "progressAnimation",
    value: function progressAnimation(progressAnimationCallback) {
      const SharedTransition = progressAnimationCallback;
      /* worklet (recovered source) */ function pnpm_SharedTransitionTs1(viewTag,values,progress){const{progressAnimationCallback}=this.__closure;const newStyles=progressAnimationCallback(values,progress);global._notifyAboutProgress(viewTag,newStyles,true);}
      pnpm_SharedTransitionTs1.__closure = { progressAnimationCallback };
      pnpm_SharedTransitionTs1.__workletHash = 10649853891033;
      pnpm_SharedTransitionTs1.__initData = closure_6;
      this._customProgressAnimation = pnpm_SharedTransitionTs1;
      return this;
    }
  };
  items[1] = obj;
  obj = {
    key: "duration",
    value: function duration(_transitionDuration) {
      this._transitionDuration = _transitionDuration;
      return this;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "reduceMotion",
    value: function reduceMotion(_reduceMotion) {
      this._reduceMotion = _reduceMotion;
      return this;
    }
  };
  items[4] = {
    key: "defaultTransitionType",
    value: function defaultTransitionType(_defaultTransitionType) {
      this._defaultTransitionType = _defaultTransitionType;
      return this;
    }
  };
  items[5] = {
    key: "registerTransition",
    value: function registerTransition(componentViewTag, sharedTransitionTag, arg2) {
      const self = this;
      const tmp = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
      if (!obj.getReduceMotionFromConfig(self.getReduceMotion())) {
        const transitionAnimation = self.getTransitionAnimation();
        const progressAnimation = self.getProgressAnimation();
        if (!self._defaultTransitionType) {
          if (self._customAnimationFactory) {
            if (!self._customProgressAnimation) {
              self._defaultTransitionType = callback(closure_2[2]).SharedTransitionType.ANIMATION;
            }
          }
          self._defaultTransitionType = callback(closure_2[2]).SharedTransitionType.PROGRESS_ANIMATION;
        }
        if (self._defaultTransitionType === callback(closure_2[2]).SharedTransitionType.ANIMATION) {
          let SHARED_ELEMENT_TRANSITION_PROGRESS = callback(closure_2[2]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
        } else {
          SHARED_ELEMENT_TRANSITION_PROGRESS = callback(closure_2[2]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS;
        }
        const obj2 = callback(closure_2[4]);
        const result = obj2.updateLayoutAnimations(componentViewTag, SHARED_ELEMENT_TRANSITION_PROGRESS, transitionAnimation, sharedTransitionTag, tmp);
        const _progressTransitionManager = SharedTransition._progressTransitionManager;
        _progressTransitionManager.addProgressAnimation(componentViewTag, progressAnimation);
      }
    }
  };
  items[6] = {
    key: "unregisterTransition",
    value: function unregisterTransition(componentViewTag, arg1) {
      const tmp = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
      if (this._defaultTransitionType === callback(closure_2[2]).SharedTransitionType.ANIMATION) {
        let SHARED_ELEMENT_TRANSITION_PROGRESS = callback(closure_2[2]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
      } else {
        SHARED_ELEMENT_TRANSITION_PROGRESS = callback(closure_2[2]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS;
      }
      const result = callback(closure_2[4]).updateLayoutAnimations(componentViewTag, SHARED_ELEMENT_TRANSITION_PROGRESS, undefined, undefined, tmp);
      const _progressTransitionManager = SharedTransition._progressTransitionManager;
      const result1 = _progressTransitionManager.removeProgressAnimation(componentViewTag, tmp);
    }
  };
  items[7] = {
    key: "getReduceMotion",
    value: function getReduceMotion() {
      return this._reduceMotion;
    }
  };
  items[8] = {
    key: "getTransitionAnimation",
    value: function getTransitionAnimation() {
      const self = this;
      if (!this._animation) {
        const animation = self.buildAnimation();
      }
      return self._animation;
    }
  };
  items[9] = {
    key: "getProgressAnimation",
    value: function getProgressAnimation() {
      const self = this;
      if (!this._progressAnimation) {
        const progressAnimation = self.buildProgressAnimation();
      }
      return self._progressAnimation;
    }
  };
  items[10] = {
    key: "buildAnimation",
    value: function buildAnimation() {
      const _customAnimationFactory = this._customAnimationFactory;
      const SharedTransition = _customAnimationFactory;
      const _transitionDuration = this._transitionDuration;
      const _reduceMotion = this._reduceMotion;
      /* worklet (recovered source) */ function pnpm_SharedTransitionTs2(values){const{animationFactory,SUPPORTED_PROPS,withTiming,reduceMotion,transitionDuration}=this.__closure;let animations={};const initialValues={};if(animationFactory){animations=animationFactory(values);for(const key in animations){if(!SUPPORTED_PROPS.includes(key)){throw new ReanimatedError("The prop '"+key+"' is not supported yet.");}}}else{for(const propName of SUPPORTED_PROPS){if(propName==='transform'){const matrix=values.targetTransformMatrix;animations.transformMatrix=withTiming(matrix,{reduceMotion:reduceMotion,duration:transitionDuration});}else{const capitalizedPropName=""+propName.charAt(0).toUpperCase()+propName.slice(1);const keyToTargetValue="target"+capitalizedPropName;animations[propName]=withTiming(values[keyToTargetValue],{reduceMotion:reduceMotion,duration:transitionDuration});}}}for(const propName in animations){if(propName==='transform'){initialValues.transformMatrix=values.currentTransformMatrix;}else{const capitalizedPropName=propName.charAt(0).toUpperCase()+propName.slice(1);const keyToCurrentValue="current"+capitalizedPropName;initialValues[propName]=values[keyToCurrentValue];}}return{initialValues:initialValues,animations:animations};}
      pnpm_SharedTransitionTs2.__closure = { animationFactory: _customAnimationFactory, SUPPORTED_PROPS: closure_5, withTiming: _transitionDuration(_reduceMotion[6]).withTiming, reduceMotion: _reduceMotion, transitionDuration: _transitionDuration };
      pnpm_SharedTransitionTs2.__workletHash = 5349002490567;
      pnpm_SharedTransitionTs2.__initData = closure_7;
      this._animation = pnpm_SharedTransitionTs2;
    }
  };
  items[11] = {
    key: "buildProgressAnimation",
    value: function buildProgressAnimation() {
      const self = this;
      if (this._customProgressAnimation) {
        self._progressAnimation = self._customProgressAnimation;
      } else {
        /* worklet (recovered source) */ function pnpm_SharedTransitionTs3(viewTag,values,progress){const{SUPPORTED_PROPS}=this.__closure;const newStyles={};for(const propertyName of SUPPORTED_PROPS){if(propertyName==='transform'){const currentMatrix=values.currentTransformMatrix;const targetMatrix=values.targetTransformMatrix;const newMatrix=new Array(9);for(let i=0;i<9;i++){newMatrix[i]=progress*(targetMatrix[i]-currentMatrix[i])+currentMatrix[i];}newStyles.transformMatrix=newMatrix;}else{const PropertyName=propertyName.charAt(0).toUpperCase()+propertyName.slice(1);const currentPropertyName="current"+PropertyName;const targetPropertyName="target"+PropertyName;const currentValue=values[currentPropertyName];const targetValue=values[targetPropertyName];newStyles[propertyName]=progress*(targetValue-currentValue)+currentValue;}}global._notifyAboutProgress(viewTag,newStyles,true);}
        const obj = { SUPPORTED_PROPS: closure_5 };
        pnpm_SharedTransitionTs3.__closure = obj;
        pnpm_SharedTransitionTs3.__workletHash = 11460342543363;
        pnpm_SharedTransitionTs3.__initData = closure_8;
        self._progressAnimation = pnpm_SharedTransitionTs3;
      }
    }
  };
  const items1 = [
    {
      key: "custom",
      value: function custom(arg0) {
        return new SharedTransition().custom(arg0);
      }
    },
    {
      key: "duration",
      value: function duration(arg0) {
        return new SharedTransition().duration(arg0);
      }
    },
    {
      key: "progressAnimation",
      value: function progressAnimation(arg0) {
        return new SharedTransition().progressAnimation(arg0);
      }
    },
    {
      key: "defaultTransitionType",
      value: function defaultTransitionType(arg0) {
        return new SharedTransition().defaultTransitionType(arg0);
      }
    },
    {
      key: "reduceMotion",
      value: function reduceMotion(arg0) {
        return new SharedTransition().reduceMotion(arg0);
      }
    }
  ];
  return callback(SharedTransition, items, items1);
}();
const progressTransitionManager = new arg1(dependencyMap[7]).ProgressTransitionManager();
tmp2._progressTransitionManager = progressTransitionManager;

export const SharedTransition = tmp2;
