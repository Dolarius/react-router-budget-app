type Props = {
  key: string;
};

// Local storage
export const fetchData = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};

// delete item
export const deleteItem = ({ key }: Props) => {
  return localStorage.removeItem(key);
};
