import React, { createContext } from "react";

export interface BarCode {
  id: string;
  name: string;
}

interface ListBarCodeContext {
  listBarCode: BarCode[];
  addNewBarCode: (barCode: BarCode) => void;
  deleteBarCode: (id: string) => void;
}

export const ListBarCodeContext = createContext<ListBarCodeContext>({
  listBarCode: [],
  addNewBarCode: (barCode: BarCode) => {},
  deleteBarCode: (id: string) => {},
});

export function ListBarCodeProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [listBarCode, setListBarCode] = React.useState<BarCode[]>([
    { name: "Camera", id: "12345" },
  ]);
  const addNewBarCode = (barCode: BarCode) => {
    setListBarCode((prev) => [...prev, barCode]);
  };
  const deleteBarCode = (id: string) => {
    setListBarCode((prev) => prev.filter((b) => b.id !== id));
  };
  return (
    <ListBarCodeContext.Provider
      value={{ listBarCode, addNewBarCode, deleteBarCode }}
    >
      {children}
    </ListBarCodeContext.Provider>
  );
}
