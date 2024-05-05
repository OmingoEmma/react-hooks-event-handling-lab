// Code Keypad Component Here

function Keypad (){
    function handleChange(event) {
        console.log(`${event.target.number}: ${event.target.value}`);
      }
    
      return (
        <div>
          <input
            type="number"
            onChange={handleChange}
            placeholder="Entering password..."
          />
    
          <select number="filter" onChange={handleChange}>
            <option value="all">Entering password...</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      );
    }

export default Keypad;

    