import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  firstArrow,
  pointIcon,
  arrow,
  step1,
  step2,
  step3,
  mainDiv,
  mainBg,

  loopBack,
}) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{ background: mainBg }}
    >
      <div className={classes.wrapper}>
        <div className={classes.firstArrow}>{firstArrow}</div>
        <div className={classes.steps}>
          <div className={classes.stepsContainer}>
            {step1.duty.map((el, i) => (
              <div className={classes.step} key={i}>
                <div className={classes.content}>
                  <div className={classes.topContent}>
                    <div className={classes.circle} style={{ "--bg": el.bg }}>
                      <div className={classes.icon}>{el.icon}</div>
                      <p
                        className={classes.title}
                        style={{ "--color": el.titleColor }}
                      >
                        {el.title}
                      </p>
                    </div>
                  </div>
                  <div className={classes.pointIcon}>{pointIcon}</div>
                </div>
                <div className={classes.arrow}>{arrow}</div>
                <div className={classes.userContainer}>
                  <div className={classes.users}>{step1.users}</div>
                  <p
                    className={classes.info}
                    style={{ "--color": step1.dutyOf.color }}
                  >
                    {step1.dutyOf.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={classes.stepsContainer}>
            {step2.duty.map((el, i) => (
              <div className={classes.step} key={i}>
                <div className={classes.content}>
                  <div className={classes.topContent}>
                    <div className={classes.circle} style={{ "--bg": el.bg }}>
                      <div className={classes.icon}>{el.icon}</div>
                      <p
                        className={classes.title}
                        style={{ "--color": el.titleColor }}
                      >
                        {el.title}
                      </p>
                    </div>
                  </div>
                  <div className={classes.pointIcon}>{pointIcon}</div>
                </div>{" "}
                <div className={classes.arrow}>{arrow}</div>
              </div>
            ))}
            <div className={classes.userContainer}>
              <div className={classes.users}>{step2.users}</div>
              <p
                className={classes.info}
                style={{ "--color": step2.dutyOf.color }}
              >
                {step2.dutyOf.label}
              </p>
            </div>
          </div>
          <div className={[classes.step, classes.mainDiv].join(" ")}>
            <div
              className={classes.content}
              style={{
                "--innerCircleBg": mainDiv.innerCircleBg,
                "--outerCircleBg": mainDiv.outerCircleBg,
              }}
            >
              <div className={classes.topContent}>
                <div className={classes.circle}>
                  <div className={classes.icon}>{mainDiv.topInfo.icon}</div>
                  <p
                    className={classes.title}
                    style={{ "--color": mainDiv.topInfo.titleColor }}
                  >
                    {mainDiv.topInfo.title}
                  </p>
                </div>
              </div>
              <div>{mainDiv.icon}</div>
              <div className={classes.bottomContent}>
                <div className={classes.circle}>
                  <div className={classes.icon}>{mainDiv.bottomInfo.icon}</div>
                  <p
                    className={classes.title}
                    style={{ "--color": mainDiv.bottomInfo.titleColor }}
                  >
                    {mainDiv.bottomInfo.title}
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.arrow}>{arrow}</div>
          </div>{" "}
          <div className={classes.stepsContainer}>
            {step3.duty.map((el, i) => (
              <div className={classes.step} key={i}>
                <div className={classes.content}>
                  <div className={classes.topContent}>
                    <div className={classes.circle} style={{ "--bg": el.bg }}>
                      <div className={classes.icon}>{el.icon}</div>
                      <p
                        className={classes.title}
                        style={{ "--color": el.titleColor }}
                      >
                        {el.title}
                      </p>
                    </div>
                  </div>
                  <div className={classes.pointIcon}>{pointIcon}</div>
                </div>{" "}
                <div className={classes.arrow}>{arrow}</div>
              </div>
            ))}
            <div className={classes.userContainer}>
              <div className={classes.users}>{step3.users}</div>
              <p
                className={classes.info}
                style={{ "--color": step3.dutyOf.color }}
              >
                {step3.dutyOf.label}
              </p>
            </div>
          </div>
          {loopBack && loopBack.show && (
            <div className={classes.reverse}>
              <div className={classes.reverseArrow}>{loopBack.arrow}</div>
              <div classes={classes.labelContainer}>
                <p
                  className={classes.label}
                  style={{ "--color": loopBack.labelColor }}
                >
                  {loopBack.label}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
