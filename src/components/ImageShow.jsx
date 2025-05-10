const ImageShow = ({Image}) => {
    return (
        <div>
            <img src={Image.urls.small} alt={Image.alt_description} />
        </div>
    )
}

export default ImageShow