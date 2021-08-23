import React from "react";

export const TabPanel = ({
  children,
  id,
  tabId,
  tabIndex,
  selectedTab
}) => (
  <section
    role="tabpanel"
    id={id}
    aria-labelledby={tabId}
    hidden={selectedTab !== tabIndex}
    tabIndex={0}
  >
    {children}
  </section>
);

