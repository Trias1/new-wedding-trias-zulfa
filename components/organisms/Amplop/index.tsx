import React from "react";
import Image from "next/image";
import bri from "../../../public/img/bri.png";
import gopay from "../../../public/img/gopay.jpeg";
import dana from "../../../public/img/dana.jpeg";

export default function Amplop() {
  return (
    <section>
      <div className="section w-details-area center-text">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h1 className="text-amplop text-white mb-4">Amplop</h1>
              <h4>
                Jika Bapak/Ibu/Saudara/i ingin mengirimkan hadiah pernikahan
                kepada mempelai pengantin, silahkan mengirimkannya ke :
              </h4>
              <div className="row justify-content-center mt-5 d-block ">
                <div className="col">
                  <div className="bg-white border border-3 rounded-start rounded-end py-2">
                    <div className="mx-5 mx-sm-5 position-relative">
                      <div className="">
                        <h4 className="text-black">Gopay</h4>
                      </div>
                      <div className="mt-2 bg-white mx-5 mx-md-5 border border-secondary rounded" />
                      <div className="mt-2 bg-white mx-5 mx-md-5 border border-secondary rounded">
                        <Image
                          src={gopay}
                          className="img-fluidd"
                          width={250}
                          height={250}
                          layout="intrinsic"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="bg-white border border-3 rounded-start rounded-end py-2 mt-3">
                    <div className="mx-5 mx-sm-5 position-relative">
                      <div className="mt-2 bg-white mx-5 mx-md-5 border border-secondary rounded">
                        <Image
                          src={bri}
                          className="img-fluidd"
                          width={250}
                          height={250}
                          layout="intrinsic"
                        />
                      </div>
                      <div className="mt-2 bg-white mx-5 mx-md-5 border border-secondary rounded" />
                      <div className="no-rekening-amplop text-black fw-normal">
                        <h4>Nama : Adi</h4>
                      </div>
                      <div className="no-rekening-amplop text-black">
                        <h4> No Rekening : 404401012253536</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="bg-white border border-3 rounded-start rounded-end py-2 mt-3">
                    <div className="mx-5 mx-sm-5 position-relative">
                      <div className="text-black">
                        <h4>Dana</h4>
                      </div>
                      <div className="mt-2 bg-white mx-5 mx-md-5 border border-secondary rounded" />
                      <div className="mt-2 bg-white mx-5 mx-md-5 border border-secondary rounded">
                        <Image
                          src={dana}
                          className="img-fluidd"
                          width={250}
                          height={250}
                          layout="intrinsic"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
