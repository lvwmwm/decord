// Module ID: 3865
// Function ID: 32122
// Name: getInstalledNitro
// Dependencies: [27, 3866, 3867]
// Exports: isRuntimeAlive

// Module 3865 (getInstalledNitro)
import { TurboModuleRegistry } from "get ActivityIndicator";

function getInstalledNitro() {
  return global.NitroModulesProxy;
}
const installedNitro = getInstalledNitro();
let tmp3 = installedNitro;
if (null != installedNitro) {
  if (tmp3.version !== require("items").version) {
    const _Error2 = Error;
    const version = tmp3.version;
    const _HermesInternal2 = HermesInternal;
    const error = new Error("Nitro was installed twice: once with native version " + version + " and once with JS version " + require("items").version + ". This usually means react-native-nitro-modules exists multiple times in node_modules (e.g. in monorepos or double-linked setups).");
    throw error;
  }
} else {
  const enforcing = TurboModuleRegistry.getEnforcing("NitroModules");
  const installResult = enforcing.install();
  if (null != installResult) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error1 = new Error("Failed to install Nitro: " + tmp21);
    throw error1;
  } else {
    const installedNitro1 = getInstalledNitro();
    tmp3 = installedNitro1;
    if (null == installedNitro1) {
      const _Error3 = Error;
      const error2 = new Error("NitroModules was installed, but `global.NitroModulesProxy` was null!");
      const ModuleNotFoundError = require("_callSuper").ModuleNotFoundError;
      const prototype4 = ModuleNotFoundError.prototype;
      const moduleNotFoundError = new ModuleNotFoundError(error2);
      throw moduleNotFoundError;
    }
  }
}

export const NitroModules = tmp3;
export const isRuntimeAlive = function isRuntimeAlive() {
  return null != globalThis.__nitroJsiCache && null != globalThis.__nitroDispatcher;
};
