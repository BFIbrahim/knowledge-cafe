import profileImg from '../../assets/images/profile.png'
const Navigation = () => {
    return (
        <div className='flex justify-between pb-2  items-center mt-3 border-b-2'>
            <h2 className='text-2xl font-semibold font-sans'>Knowledge Cafe</h2>
            <img src={profileImg} alt="" />
        </div>
    );
};

export default Navigation;