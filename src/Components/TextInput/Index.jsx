import './style.css'
export const TextInput = ({ Search_value , handleChange }) =>{
    return (
        <input
        className='text-input'
        placeholder='type Your Search' 
        onChange={handleChange}
        value = {Search_value} 
        type="search" />
    )
}