import { DialogBox, DialogBoxProps } from './DialogBox';

const Content = (props: DialogBoxProps) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        left: '0px',
        top: '0px',
        zIndex: 2147483550,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '10px', // 自由に変えて良い
          top: '10px', // 自由に変えて良い
          zIndex: 2147483550,
        }}
      >
        <DialogBox {...props} />
      </div>
    </div>
  );
};

export default Content;
