import React from 'react'
import './detail2.css'
import img_rauf1 from '../../assets/abdurauf/1.png'
import img_rauf2 from '../../assets/abdurauf/2.png'
import img_rauf3 from '../../assets/abdurauf/3.png'
import img_rauf4 from '../../assets/abdurauf/4.png'
import img_rauf5 from '../../assets/abdurauf/lacivert-deri-erkek-loafer-de08-4 1 (1).png'

export function Detail2() {
    return (
        <div className='rauf_son'>
            <div className="rauf_top">
                <div className="rauf_left">
                    <img src={img_rauf1} alt="" />
                    <img src={img_rauf2} alt="" />
                    <img src={img_rauf3} alt="" />
                    <img src={img_rauf4} alt="" />
                </div>
                <div className="rauf_center">
                    <img src={img_rauf5} alt="" />
                </div>
                <div className="rauf_right"> 
                    <div className="rauf_a1">
                        <p>Maxsulot nomi</p>
                    </div>
                    <div className="rauf_a2">
                        <div className="rauf_b1">
                            <p>Rangi</p>
                            <div className="f">
                            <div className="rauf_c1"></div>
                            <div className="rauf_c2"></div>
                            <div className="rauf_c3"></div>
                            <div className="rauf_c4"></div>
                            </div>
                            
                            <p>Narxi</p>
                            <div className="ff">
                                <b>399 000</b>
                                <br />
                                <del>499 000</del>
                            </div>
                        </div>
                        <div className="rauf_b2"></div>
                    </div>
                    <div className="rauf_a3">
                       <p className='abdu_p' >O‘lchamlar</p>    
                        <div className="h1"><p>37</p></div>
                        <div className="h1"><p>38</p></div>
                        <div className="h2"><p>39</p></div>
                        <div className="h2"><p>40</p></div>
                        <div className="h2"><p>41</p></div>
                        <div className="h2"><p>42</p></div>
                        <div className="h2"><p>43</p></div>
                        <div className="h2"><p>44</p></div>
                        <div className="h2"><p>45</p></div>
                        <div className="h1"><p>46</p></div>
                    </div>
                    <div className="rauf_a4">
                        <button>Sotib olish</button>
                        <div className="has"><button>Savatga</button></div>
                    </div>
                </div>
            </div>
            <div className="rauf_bottom">
                <div className="rauf_button">
                    <button>Malumot </button>
                    <div className="gaz">
                    <button>Komentariya</button>
                    </div>
                </div>
                <div className="rauf_cart">
                    <p className='k1'>Nomi</p>
                    <span>Bir narsa bir narsa yana nimadir deyish mumkin</span>
                </div>
                <div className="rauf_cart">
                    <p className='k2'>Narxi</p>
                    <span>399 000 so‘m</span>
                </div>
                <div className="rauf_cart">
                    <p className='k3'>O‘lchamlar</p>
                    <span>39, 40, 41, 42, 43, 44, 45</span>
                </div>
                <div className="rauf_cart">
                    <p className='k4'>Material</p>
                    <span>Toza timsoh terisi</span>
                </div>
                <div className="rauf_cart">
                    <p className='k5'>Rangi</p>
                    <span>To‘q ko‘k</span>
                </div>
                <div className="rauf_cart">
                    <p className='k6'>Mavsum</p>
                    <span>Kuzgi oyoq kiyim</span>
                </div>
            </div>
        </div>
    )
}