'use client'

import { CldUploadWidget, CloudinaryUploadWidgetResults } from "next-cloudinary";
import Image from "next/image";
import { useCallback, useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  value
}) => {
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento

  const handleUpload = useCallback((result: any) => {
    onChange(result.info.secure_url);
    setLoading(false); // Define como falso após o upload
  }, [onChange]);

  return (
    <CldUploadWidget
      uploadPreset="iplc5yqe"
      onSuccess={(result, { widget }) => {
        setLoading(true); // Define como verdadeiro ao iniciar o upload
        handleUpload(result);
      }}
      options={{
        maxFiles: 1
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
          relative
          cursor-pointer
          hover:opacity-70
          transition
          border-dashed
          border-2
          p-20
          border-neutral-300
          flex
          flex-col
          justify-center
          items-center
          gap-4
          text-neutral-600
          "
          >
            <TbPhotoPlus size={50} />
            <div
              className="font-semibold text-lg"
            >
              Click to upload
            </div>
            {loading && ( // Exibe carregador enquanto a imagem está sendo carregada
              <div className="absolute inset-0 flex justify-center items-center">
                <span>Loading...</span> {/* Você pode substituir isso por um ícone ou animação */}
              </div>
            )}
            {value && !loading && ( // Exibe a imagem apenas quando não está carregando
              <div
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  alt="Upload"
                  fill
                  style={{ objectFit: 'cover' }}
                  src={value}
                />
              </div>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
