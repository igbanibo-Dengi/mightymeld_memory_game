import { FaQuestion } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

export function Tile({ content: Content, flip, state }) {
  const transitionClass = "my-transition";

  const transitionProps = {
    in: state === "flipped" || state === "matched",
    timeout: 300,
    classNames: transitionClass,
  };

  return (
    <CSSTransition {...transitionProps}>
      {state === "start" ? (
        <Back
          className="cursor-pointer flex items-center justify-center rounded-md h-16 md:h-24 w-16 md:w-24 bg-blue-300 hover:bg-blue-300/50 text-center"
          flip={flip}
        />
      ) : state === "flipped" ? (
        <Front className="p-2 flex items-center justify-center rounded-md h-16 md:h-24 w-16 md:w-24 bg-pink-300 text-white text-center">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
            }}
          />
        </Front>
      ) : (
        <Matched className="flex items-center justify-center h-16 md:h-24 w-16 md:w-24 border border-green-500 rounded-md text-green-500 p-2">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
            }}
          />
        </Matched>
      )}
    </CSSTransition>
  );
}

function Back({ className, flip }) {
  return (
    <div onClick={flip} className={className}>
      <span className="">
        {/* <FaQuestion color="white" size={20} /> */}
      </span>
    </div>
  );
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
