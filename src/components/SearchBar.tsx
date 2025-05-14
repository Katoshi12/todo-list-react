import {type ChangeEvent, type FC, type FormEvent, useState} from "react";

type Props = {
  onAdd: (value: string) => void;
};
const SearchBar: FC<Props> = ({onAdd}) => {
  const [text, setText] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    const trimmed = text.trim();
    if (trimmed) {
      onAdd(trimmed);
      setText('');
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange}/>
      <button type="submit">Добавить</button>
    </form>
  )
}

export default SearchBar;