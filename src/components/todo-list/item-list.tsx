import Trash from '../../assets/Trash';
import '../style.css'

function Item(props : any) {
  return (
    <li className="Flex-item">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <input className='mx-2' type="checkbox" onChange={props.onChange} />
          <p>{props.title}</p>
        </div>
        <Trash onClick={() => { console.log("delete : ", props.title) }} />
      </div>
    </li>
  );

}

const ItemList = ({ items }: { items: string[] }) => {
  return <>
      <ul className="Flex">
        {
          items.map((item) => {
            return <Item title={item} onChange={() => { console.log("checked : ", item) }} />;
          })
        }
      </ul>
  </>

};

export default ItemList;