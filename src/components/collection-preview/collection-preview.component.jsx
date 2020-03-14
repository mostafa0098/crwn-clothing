import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
export default function collectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemOptions }) => (
            <CollectionItem key={id} {...otherItemOptions}></CollectionItem>
          ))}
      </div>
    </div>
  );
}
