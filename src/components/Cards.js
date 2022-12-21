import { useState } from 'react'
import Card from './Card'
import img1 from '../image/img1.jpg'
import img2 from '../image/img2.jpg'
import img3 from '../image/img3.jpg'
import img4 from '../image/img4.jpg'
import img5 from '../image/img5.jpg'
import img6 from '../image/img6.png'

const Cards = () =>{
    // eslint-disable-next-line no-mixed-operators
    const [items,setItems] = useState([
        { id: 1, img:img1, stat: "" },
        { id: 1, img: img1, stat: "" },
        { id: 2, img: img2, stat: "" },
        { id: 2, img: img2, stat: "" },
        { id: 3, img: img3, stat: "" },
        { id: 3, img: img3, stat: "" },
        { id: 4, img: img4, stat: "" },
        { id: 4, img: img4, stat: "" },
        { id: 5, img: img5, stat: "" },
        { id: 5, img: img5, stat: "" },
        { id: 6, img: img6, stat: "" },
        { id: 6, img: img6, stat: "" },
].sort(()=>Math.random()- 0.5))

    const [prev, setPrev] = useState(-1)

    const check = (current) =>{
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    const handleClick = (id) =>{
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
    )
}

export default Cards