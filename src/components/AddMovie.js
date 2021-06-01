import React , {useState} from 'react'
import Modal from '@material-ui/core/Modal';
import StarRatingComponent from 'react-star-rating-component';
import {v4 as uuidv4} from 'uuid';


const AddMovie = ({handleAdd}) => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState([])
    const [rate, setRate] = useState(0)
    const handleInput = (e) =>{
        setInput({...input,[e.target.name]: e.target.value});

    };
    /*const handleAdd=(e) => {
      e.preventDefault();

      handleClose();  
    }*/

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div>
            <div className='btn-container'>
                <button className='Add-Button' type="button" onClick={handleOpen}> + </button>
            </div>
            <Modal open={open}>
                <div  className='Paper'>
                  <h4>Add Movie</h4>
                  <form onSubmit={handleClose}>
                    <input className='TextField' 
                           type='text' name='title' 
                           placeholder='Movie Title ...' 
                           variant="outlined" 
                           onChange={handleInput} 
                    /><br/>
                    <input className='TextField' 
                           type='text' 
                           name='description' 
                           placeholder='Movie description ...' 
                           variant="outlined" 
                           onChange={handleInput}/><br/>
                    <input className='TextField' 
                           type='text' 
                           name='posterURL' 
                           placeholder='Movie image URL path ...' 
                           variant="outlined" 
                           onChange={handleInput}/><br/>
                    <StarRatingComponent className='star-rating' 
                                         name='rate' value={rate} 
                                         starCount={5} 
                                         starColor={'#e50914'} emptyStarColor={'#9E9E9E'} 
                                         onStarClick={(value)=>setRate(value)}/><br/><br/><br/>
                    <button 
                        style={{backgroundColor:'#e50914', border:'none', width: 150, height: 50,color:'#FFF', fontSize:20, fontFamily:'Helvetica'}}  
                        type="submit" 
                        onClick={() => handleAdd({ ...input,  id: uuidv4(), rate: rate })}
                        >
                        Add Movie
                    </button>
                    
                  </form>
                </div>
            </Modal>
        </div>
    )
};
export default AddMovie;
