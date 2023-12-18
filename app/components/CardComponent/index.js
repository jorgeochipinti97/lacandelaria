import React from "react";

export const CardComponent = ({ icon, title, subtitle }) => {
  return (
    <>
      <div class="card">
        <div class="card-content">
          <div class="card-image">{icon}</div>
          <div class="card-info-wrapper">
            <div class="card-info">
              <i class="fa-duotone fa-apartment"></i>
              <div class="card-info-title">
                <h3 className="font-sans text-slate-200">{title}</h3>
                <h4 className="font-sans hidden md:block">{subtitle}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
