// Module ID: 973
// Function ID: 974
// Name: eventOriginIntegration
// Dependencies: []
// Exports: eventOriginIntegration

// Module 973 (eventOriginIntegration)

export const eventOriginIntegration = () => ({
  name: "EventOrigin",
  setupOnce() {

  },
  processEvent(tags) {
    tags = tags.tags;
    if (null === tags) {
      tags = {};
    }
    tags.tags = tags;
    tags.tags["event.origin"] = "javascript";
    tags.tags["event.environment"] = "javascript";
    return tags;
  }
});
