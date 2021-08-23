import React, {useRef, useState} from "react";
import {TabPanel} from "./TabPanel";
import {Tab} from "./Tab";
import styles from "./Tabs.module.css";

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleClick = (index) => {
    setSelectedTab(index);
  };

  const tabValues = {
    1: {title: "Boxhill high school", ref: useRef(null)},
    2: {title: "Docklands high school", ref: useRef(null)},
    3: {title: "Burwood high school", ref: useRef(null)},
    4: {title: "Boxhill primary school", ref: useRef(null)},
    5: {title: "Docklands primary school", ref: useRef(null)},
    6: {title: "Burwood primary school", ref: useRef(null)},
  };

  const handleKeyPress = (event) => {
    const tabCount = Object.keys(tabValues).length;

    if (event.key === "ArrowLeft") {
      const last = tabCount;
      const next = selectedTab - 1;
      handleNextTab(last, next, 1);
    }
    if (event.key === "ArrowRight") {
      const first = 1;
      const next = selectedTab + 1;
      handleNextTab(first, next, tabCount);
    }
  };

  const handleNextTab = (firstTabInRound, nextTab, lastTabInRound) => {
    const tabToSelect = selectedTab === lastTabInRound ? firstTabInRound : nextTab;
    setSelectedTab(tabToSelect);
    tabValues[tabToSelect].ref.current.focus();
  };

  return (
    <div className={styles.tabPanelList}>
      <div className={styles.tabsSectionFirst}>
        <div>
          <h2>High schools</h2>
          <ul role="tablist" className={styles.tablist} aria-label="School tabs" onKeyDown={handleKeyPress}>
            <Tab id="one" tabPanelId="firstTabPanel" index={1} handleChange={handleClick} selectedTab={selectedTab} tabRef={tabValues[1].ref} title={tabValues[1].title} />
            <Tab id="two" tabPanelId="secondTabPanel" index={2} handleChange={handleClick} selectedTab={selectedTab} tabRef={tabValues[2].ref} title={tabValues[2].title} />
            <Tab id="three" tabPanelId="thirdTabPanel" index={3} handleChange={handleClick} selectedTab={selectedTab} tabRef={tabValues[3].ref} title={tabValues[3].title} />
          </ul>
        </div>
        <TabPanel id="firstTabPanel" tabId="firstTab" tabIndex={1} selectedTab={selectedTab}>
          <h4>{tabValues[1].title}</h4>
          <p>The school details</p>
          <ul>
            <li>
              <a href="https://www.boxhillhs.vic.edu.au/">Box hill high school</a>
            </li>
          </ul>
        </TabPanel>
        <TabPanel id="secondTabPanel" tabId="secondTab" tabIndex={2} selectedTab={selectedTab}>
          <h4>{tabValues[2].title}</h4>
          <li>
            <a href="https://engage.vic.gov.au/DocklandsPrimary/">Dcoklands high school</a>
          </li>
        </TabPanel>
        <TabPanel id="thirdTabPanel" tabId="thirdTab" tabIndex={3} selectedTab={selectedTab}>
          <h4>{tabValues[3].title}</h4>
          <li>Burwood high school</li>
        </TabPanel>
      </div>
      <div className={styles.tabsSectionSecond}>
        <h2>Primary schools</h2>
        <ul role="tablist" className={styles.tablist} aria-label="School tabs" onKeyDown={handleKeyPress}>
          <Tab id="four" tabPanelId="fourthTabPanel" index={4} handleChange={handleClick} selectedTab={selectedTab} tabRef={tabValues[4].ref} title={tabValues[4].title} />
          <Tab id="five" tabPanelId="fifthTabPanel" index={5} handleChange={handleClick} selectedTab={selectedTab} tabRef={tabValues[5].ref} title={tabValues[5].title} />
          <Tab id="six" tabPanelId="sixthTabPanel" index={6} handleChange={handleClick} selectedTab={selectedTab} tabRef={tabValues[6].ref} title={tabValues[6].title} />
        </ul>

        <TabPanel id="fourthTabPanel" tabId="fourthTab" tabIndex={4} selectedTab={selectedTab}>
          <h4>{tabValues[4].title}</h4>
          <ul>
            <li>
              <a href="https://www.boxhillhs.vic.edu.au/">Box hill primary school</a>
            </li>
          </ul>
        </TabPanel>
        <TabPanel id="fifthTabPanel" tabId="fifthTab" tabIndex={5} selectedTab={selectedTab}>
          <h4>{tabValues[5].title}</h4>
          <li>
            <a href="https://engage.vic.gov.au/DocklandsPrimary/">Docklands primary school</a>
          </li>
        </TabPanel>
        <TabPanel id="sixthTabPanel" tabId="sixthTab" tabIndex={6} selectedTab={selectedTab}>
          <h4>{tabValues[6].title}</h4>
          <li>Burwood Primary school</li>
        </TabPanel>
      </div>
    </div>
  );
};
