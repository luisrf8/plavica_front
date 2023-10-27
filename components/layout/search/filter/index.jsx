import FilterItemDropdown from './dropdown';
import { FilterItem } from './item';

export function FilterItemList({ list }) {
  return (
    <>
      {list.map((item, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
}

export default function FilterList({ list, title }) {
  return (
    <>
      <nav>
        {title ? <h3 className="hidden text-blue-900 font-semibold md:block">{title}</h3> : null}
        <ul className="hidden md:block">
          <FilterItemList list={list} />
        </ul>
        <ul className="md:hidden">
          <FilterItemDropdown list={list} />
        </ul>
      </nav>
    </>
  );
}
