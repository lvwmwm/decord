// Module ID: 987
// Function ID: 988
// Name: eventOriginIntegration
// Dependencies: []
// Exports: eventOriginIntegration

// Module 987 (eventOriginIntegration)

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
