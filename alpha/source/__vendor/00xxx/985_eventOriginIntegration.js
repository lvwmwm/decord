// Module ID: 985
// Function ID: 986
// Name: eventOriginIntegration
// Dependencies: []
// Exports: eventOriginIntegration

// Module 985 (eventOriginIntegration)

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
