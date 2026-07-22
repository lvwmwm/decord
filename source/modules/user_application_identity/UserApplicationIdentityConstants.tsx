// Module ID: 4812
// Function ID: 42130
// Name: items1
// Dependencies: []
// Exports: getMigratedApplicationIdentityConnectionsScreenApplications

// Module 4812 (items1)
let obj = { RIOT_GAMES: "1443033465766281327", BATTLENET: "1356665549089800303" };
obj = {
  applicationId: obj.RIOT_GAMES,
  getMigrationExperimentEnabled(location) {
    let obj = require(dependencyMap[0]);
    obj = { location };
    return obj.getIsRiotSocialSDKMigrationEnabled(obj);
  },
  useMigrationExperimentEnabled(location) {
    let obj = require(dependencyMap[0]);
    obj = { location };
    return obj.useIsRiotSocialSDKMigrationEnabled(obj);
  }
};
const items = [obj];
obj = {
  applicationId: obj.RIOT_GAMES,
  getMigrationExperimentEnabled(location) {
    let obj = require(dependencyMap[0]);
    obj = { location };
    return obj.getIsRiotSocialSDKMigrationEnabled(obj);
  },
  useMigrationExperimentEnabled(location) {
    let obj = require(dependencyMap[0]);
    obj = { location };
    return obj.useIsRiotSocialSDKMigrationEnabled(obj);
  }
};
const items1 = [
  obj,
  {
    applicationId: obj.BATTLENET,
    getMigrationExperimentEnabled(location) {
      const battlenetSocialSDKMigrationExperiment = require(dependencyMap[0]).battlenetSocialSDKMigrationExperiment;
      return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
    },
    useMigrationExperimentEnabled(location) {
      const battlenetSocialSDKMigrationExperiment = require(dependencyMap[0]).battlenetSocialSDKMigrationExperiment;
      return battlenetSocialSDKMigrationExperiment.useConfig({ location }).enabled;
    }
  }
];
const items2 = [
  {
    applicationId: obj.RIOT_GAMES,
    getMigrationExperimentEnabled(location) {
      let obj = require(dependencyMap[0]);
      obj = { location };
      return obj.getIsRiotSocialSDKMigrationEnabled(obj);
    },
    useMigrationExperimentEnabled(location) {
      let obj = require(dependencyMap[0]);
      obj = { location };
      return obj.useIsRiotSocialSDKMigrationEnabled(obj);
    }
  },
  {
    applicationId: obj.BATTLENET,
    getMigrationExperimentEnabled(location) {
      const battlenetSocialSDKMigrationExperiment = require(dependencyMap[0]).battlenetSocialSDKMigrationExperiment;
      return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
    },
    useMigrationExperimentEnabled(location) {
      const battlenetSocialSDKMigrationExperiment = require(dependencyMap[0]).battlenetSocialSDKMigrationExperiment;
      return battlenetSocialSDKMigrationExperiment.useConfig({ location }).enabled;
    }
  }
];
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityConstants.tsx");

export const ApplicationIdentityConnections = obj;
export const APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS = items;
export const APPLICATION_IDENTITY_CONNECTIONS_SCREEN_APPLICATIONS = items1;
export const APPLICATION_IDENTITY_CONNECTIONS_INCENTIVIZED_APPLICATIONS = items2;
export const getMigratedApplicationIdentityConnectionsScreenApplications = function getMigratedApplicationIdentityConnectionsScreenApplications(arg0) {
  const require = arg0;
  const found = items1.filter((getMigrationExperimentEnabled) => getMigrationExperimentEnabled.getMigrationExperimentEnabled(getMigrationExperimentEnabled));
  return found.map((applicationId) => applicationId.applicationId);
};
