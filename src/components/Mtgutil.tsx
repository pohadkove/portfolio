import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";

export default function Mtgutil() {

  return (
    <>
        <div className="project">
        <div>
          <a
            href="https://github.com/pohadkove/MTG-Util-revamped"
            target="_blank"
          >
            <h1>MTG-Util</h1>
          </a>
        </div>
        <div>
          <p>
            <a
              href="https://github.com/pohadkove/MTG-Util-revamped"
              target="_blank"
            >
              MTG-Util
            </a>
            &nbsp;
            is a desktop app for magic the gathering with life point counters
            dice roller and rule book. There is also a mobile website version <a
              href="https://mtg-util-mobile.vercel.app/tab1"
              target="_blank"
            >
              Here
            </a>
          </p>
        </div>
        <div className="arrow-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="#ffff"
            className="bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
