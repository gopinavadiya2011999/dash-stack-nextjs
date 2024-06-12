"use client";
import React, { useEffect, useState } from "react";
import styles from "./SideBarView.module.css";
import useWindowWidth from "@/app/hooks/MediaWidthHooks";
import Link from "next/link";

interface Props {
  title: string;
  icon: string;
  to: string;
}

const SideBarView = () => {
  const windowWidth = useWindowWidth();
  const listOfSideBar: Props[] = [
    {
      title: "Dashboard",
      icon: "../../../images/dashboard.svg",
      to: "/",
    },
    {
      title: "Products",
      icon: "../../../images/products.svg",
      to: "/products",
    },
    {
      title: "Favourites",
      icon: "../../../images/favourites.svg",
      to: "/",
    },
    {
      title: "Inbox",
      icon: "../../../images/inbox.svg",
      to: "/",
    },
    {
      title: "Order Lists",
      icon: "../../../images/orderlist.svg",
      to: "/",
    },
    {
      title: "Product Stock",
      icon: "../../../images/productstock.svg",
      to: "/",
    },
    {
      title: "Pricing",
      icon: "../../../images/pricing.svg",
      to: "/",
    },
    {
      title: "Calender",
      icon: "../../../images/calender.svg",
      to: "/",
    },
    {
      title: "To - Do",
      icon: "../../../images/todo.svg",
      to: "/",
    },
    {
      title: "Contact",
      icon: "../../../images/contact.svg",
      to: "/",
    },
    {
      title: "Invoice",
      icon: "../../../images/invoice.svg",
      to: "/",
    },
    {
      title: "Ui Elements",
      icon: "../../../images/uielements.svg",
      to: "/",
    },
    {
      title: "Team",
      icon: "../../../images/team.svg",
      to: "/",
    },
    {
      title: "Table",
      icon: "../../../images/table.svg",
      to: "/",
    },
    {
      title: "Settings",
      icon: "../../../images/setting.svg",
      to: "/",
    },
    {
      title: "Logout",
      icon: "../../../images/logout.svg",
      to: "/",
    },
  ];
  const [selectedValue, setSelectedValue] = useState<Props | undefined>();

  useEffect(() => {
    const storedItem = localStorage.getItem("currentItem");
    if (storedItem) {
      try {
        const parsedItem = JSON.parse(storedItem) as Props;
        setSelectedValue(parsedItem);
      } catch (e) {
        console.error("Failed to parse stored item", e);
      }
    } else {
      setSelectedValue(listOfSideBar[0]);
    }
  }, []);

  return (
    <div className={`${styles.sideBar}`}>
      {listOfSideBar.map((item, index) => (
        <Link href={item.to} key={index}>
          <div
            className={styles.iconText}
            style={{
              width: windowWidth < 1270 ? "80px" : "250px",
            }}
            onClick={() => {
              setSelectedValue(item);
              localStorage.setItem("currentItem", JSON.stringify(item));
            }}
          >
            <div
              className={styles.blueLeft}
              style={{
                visibility:
                  selectedValue?.title === item.title ? "visible" : "hidden",
              }}
            ></div>
            <div
              className={`pt-3 pb-3 ${windowWidth < 1270 ? "pl-3" : "pl-4"} ${
                selectedValue?.title === item.title
                  ? styles.blueContainer
                  : styles.greyContainer
              }`}
            >
              <img src={item.icon} alt={item.title} />
              {windowWidth > 1270 && (
                <div style={{ marginLeft: "10px" }}>{item.title}</div>
              )}
            </div>
          </div>
          {(index === 5 || index === 13) && (
            <hr style={{ marginTop: "10px" }} />
          )}
          {index === 5 && (
            <div
              style={{
                margin: "10px 30px 0px 30px",
                fontSize: "12px",
                color: "grey",
              }}
            >
              PAGES
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};
export default SideBarView;