function List() {
    let items = ["Patata1", "Patata2", "Patata3"]
  return (
    <div>
      <ul class="list-group">
        {items.map((item, index) => (<li class="list-group-item" key={item}>{item}</li>))}
      </ul>
    </div>
  );
}

export default List