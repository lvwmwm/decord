// Module ID: 7004
// Function ID: 56205
// Name: ForumChannelAnalyticsManager
// Dependencies: []

// Module 7004 (ForumChannelAnalyticsManager)
let closure_0 = importDefault(dependencyMap[1]);
let closure_1 = importDefault(dependencyMap[2]);
class ForumChannelAnalyticsManager {
  constructor() {
    closure_0 = this;
    tmp = closure_0(this, ForumChannelAnalyticsManager);
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
        const channel = store.getChannel(channelId);
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
        const channel = store.getChannel(channelId);
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
        const channel = store.getChannel(channelId);
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
const importDefaultResult = importDefault(dependencyMap[0]);
const importDefaultResultResult = importDefault(dependencyMap[0])(ForumChannelAnalyticsManager);
const tmp2Result = new importDefault(dependencyMap[0])(ForumChannelAnalyticsManager)();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/forums/tracking/ForumChannelAnalyticsManager.tsx");

export default tmp2Result;
