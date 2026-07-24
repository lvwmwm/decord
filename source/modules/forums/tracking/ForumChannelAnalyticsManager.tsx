// Module ID: 7013
// Function ID: 56282
// Name: ForumChannelAnalyticsManager
// Dependencies: [7, 6, 1348, 2]

// Module 7013 (ForumChannelAnalyticsManager)
import _classCallCheck from "_classCallCheck";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "_defineProperties";

class ForumChannelAnalyticsManager {
  constructor() {
    self = this;
    tmp = self(this, ForumChannelAnalyticsManager);
    this.setFilterTagIds = (filterTagIds) => {
      self.filterTagIds = filterTagIds;
    };
    this.setSortOrder = (sortOrder) => {
      self.sortOrder = sortOrder;
    };
    this.setLayout = (layout) => {
      self.layout = layout;
    };
    this.setTagSetting = (tagSetting) => {
      self.tagSetting = tagSetting;
    };
    this.getFilterTagIdsAnalytics = () => {
      if (null != self.filterTagIds) {
        const _Array = Array;
        let items = Array.from(self.filterTagIds);
      } else {
        items = [];
      }
      return items;
    };
    this.getSortOrderAnalytics = (channelId) => {
      let sortOrder = self.sortOrder;
      if (null == sortOrder) {
        const channel = outer1_1.getChannel(channelId);
        let defaultSortOrder;
        if (null != channel) {
          defaultSortOrder = channel.getDefaultSortOrder();
        }
        sortOrder = defaultSortOrder;
      }
      return sortOrder;
    };
    this.getLayoutAnalytics = (channelId) => {
      let layout = self.layout;
      if (null == layout) {
        const channel = outer1_1.getChannel(channelId);
        let defaultLayout;
        if (null != channel) {
          defaultLayout = channel.getDefaultLayout();
        }
        layout = defaultLayout;
      }
      return layout;
    };
    this.getTagSettingAnalytics = (channelId) => {
      let tagSetting = self.tagSetting;
      if (null == tagSetting) {
        const channel = outer1_1.getChannel(channelId);
        let defaultTagSetting;
        if (null != channel) {
          defaultTagSetting = channel.getDefaultTagSetting();
        }
        tagSetting = defaultTagSetting;
      }
      return tagSetting;
    };
    return;
  }
}
const importDefaultResultResult = require("_defineProperties")(ForumChannelAnalyticsManager);
const tmp2Result = new require("_defineProperties")(ForumChannelAnalyticsManager)();
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/forums/tracking/ForumChannelAnalyticsManager.tsx");

export default tmp2Result;
