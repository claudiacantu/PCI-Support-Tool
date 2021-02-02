
		const textMap = {
			ecommerce: {
				notes: `Website/ Virtual Terminal
						Comsumer Enters Card Number
						-------------------------------------
						-------------------------------------

3rd Party => A
1-800 no copy => A
	
	SAQ A - Our website uses an HTML redirect / Direct post to hand consumers off to a PCI Validated Payment Gateway for payment processing.
	SAQ A - We do not store or transmit cardholder data.
	
	Part 4: 
	Hosted Payment  & iFrame
	Dial Pay 

-------------------------------------

Direct Post => A-EP
	
	SAQ A-Ep - We have a website that integrates with a PCI DSS validated payment gateway for the receipt and processing of Cardholder data.  No cardholder data enters out web infrastructure.
	SAQ A-EP - We do not store cardholder data and transmit it via using an encrypted channel via to our payment gateway.


	Part 4: 
	Javascript/ Direct Post
	
	***Scan Domain.***


	`,
				script: `Part 3 Q1:

				"Does your company share cardholder data with any third party service providers?"
				***This answer should be YES***


				Part 4 Q2:
				"Does your business use network segmentation to affect the scope of your PCS DSS Enviornment?"

				(this answer should always be NO)



				"How do you process payments?"

				-javascript/direct post
				"This will mean that the credit card information is processed on your domain.
				It Collects payment card data into a payment page that you control and then posts that information directly to the bank or payment gateway from the consumer browser."

				-hosted payment and iFrame
				"Payment takes them to a third party or it is managed by a third party. For example, paypal, authorized.com, Payline etc."


				
				-What is a network scan?

				"Its a scan of your network to make sure there are no open ports or any ways to breach and get ahold of the data you are processing."



				"Are you at your place of business where you can access the network your (tablet/terminal/domain) is connnected to that processes the credit card data?"

				-if there are mulitple locations that process w the internet then you need IP addresses for all locations.

				yes: 	"go to google..."
				no: 	"You can contact your service provider and ask for the ip address for the business and call 	us back."




				AFTER LAUNCH

				"...I have successfully launched the scan.  There are a few steps in this process.  Please allow 1-2 business days for an email notification to update you on your scan and call us back.  In the event you don't recieve an email, then you should definitely call us back and we can help you with those next additional steps. Also, make sure the router is on and the terminal stays connected during this time....lets recap :)" 



				TECH SUPPORT FOR PEOPLE WITHOUT IT:

				"We have a partner who is readily available to assist w technical issues such as (Qd). There is a fee involved with this service, would you like me to put you in contact with them and someone will contact you shortly"

				___if yes

				"I have provided company.com with your information and someone will be in contact with you shortly."

				___if no


				"Ok if you change your mind later, feel free to call us back and we can provide company.com with your information."


				`,
				copypaste: `A 

				Needed to become compliant probed SAQ , assisted with saq walk thru. Compliant & advised to print reports.

				---------------------------------------

				A-EP

				Needed to become compliant probed SAQ , assisted with saq and started scan. Advised scan is queued, await 1-2 business days for scan results.

				Expired scan. Needed to start scan, assisted with walk thru. Advised scan is queued, await 1-2 business days for scan results. 

				Needed to Submit for ASV compliance assisted with walk thru advised await 1-2 business days for approval.

				Assisted with Inconclusive scan, assisted with the 3 questions, needed to submit for compliance assisted with walk thru advised await 1-2 business days for approval.

				Needed assistance with Failed scan advised print vulnerability report and give to IT department. Advised to call if further assistance is needed. 

				Needed assistance with failed scan, assisted with requesting exception. Advised to check back 1-2 business days just to make sure the ASV team responded and if its in passing status. Advised to call if further assistance is needed. `,
			},
			terminal: {
				notes: `STANDALONE TERMINAL
						---------------------------------------
						---------------------------------------

				3G/4G and Hotspot => B
				Phone Line => B

				SAQ B - We have a stand-alone terminal that is only connected to our processor via an analog connection.
				SAQ B- We do not store cardholder data; we send transactions from our terminal/mobile device/POS to our processor via an encrypted connection.

				---------------------------------------

				Internet and Wifi => B-IP

				SAQ B-IP - We have a stand-alone terminal connected to a router and sits behind a firewall.
				SAQ B-IP - We do not store cardholder data; we send transactions from our terminal on an IP connection.
				`

				,
				script: `"How is your terminal connected?  Does it use 3G/4G Data or a Hotspot.  Does it use a phone line or internet?"

			 	(this will determine if they are B or B-IP)



				-What is a network scan?

				"Its a scan of your network to make sure there are no open ports or any ways to breach and get ahold of the data you are processing."



				"Are you at your place of business where you can access the network your (tablet/terminal/domain) is connnected to that processes the credit card data?"

				-if there are mulitple locations that process w the internet then you need IP addresses for all locations.

				yes: 	"go to google..."
				no: 	"You can contact your service provider and ask for the ip address for the business and call us back."




AFTER LAUNCH

"...I have successfully launched the scan.  There are a few steps in this process.  Please allow 1-2 business days for an email notification to update you on your scan and call us back.  In the event you don't recieve an email, then you should definitely call us back and we can help you with those next additional steps. Also, make sure the router is on and the terminal stays connected during this time....lets recap :)" 



				TECH SUPPORT FOR PEOPLE WITHOUT IT:

"We have a partner who is readily available to assist w technical issues such as (Qd). There is a fee involved with this service, would you like me to put you in contact with them and someone will contact you shortly"

___if yes

"I have provided company.com with your information and someone will be in contact with you shortly."

___if no


"Ok if you change your mind later, feel free to call us back and we can provide company.com with your information."
`,
				copypaste: `B

				Needed to become compliant probed SAQ B, assisted with saq walk thru. Compliant & Emailed COV to merchant.

				----------------------------------------------

				B-IP

				Needed to become compliant probed SAQ A-B-IP, assisted with saq and started scan. Advised scan is queued, await 1-2 business days for scan results.

				Expired scan. Needed to start scan, assisted with walk thru. Advised scan is queued, await 1-2 business days for scan results. 

				Needed to Submit for ASV compliance assisted with walk thru advised await 1-2 business days for approval.

				Assisted with Inconclusive scan, assisted with the 3 questions, needed to submit for compliance assisted with walk thru advised await 1-2 business days for approval.

				Needed assistance with Failed scan advised print vulnerability report and give to IT department. Advised to call if further assistance is needed. 

				Needed assistance with failed scan, assisted with requesting exception. Advised to check back 1-2 business days just to make sure the ASV team responded and if its in passing status. Advised to call if further assistance is needed.`,
			},
			mobile: {
				notes: `MOBILE DEVICES (Smartphones & Tablets)
						---------------------------------------
						---------------------------------------

				3G / 4G / Hotspot:

				Using Application (cellphone swiper) => B

				SAQ B - We have a stand-alone terminal that is only connected to our processor via an analog connection.
				SAQ B- We do not store cardholder data; we send transactions from our terminal/mobile device/POS to our processor via an encrypted connection.


				Virtual Terminal (never swipes) => C-VT

				SAQ C-VT - We manually enter card data via their web browser into a virtual terminal and there is no card reader attached to the device.
				SAQ C-VT - We do not store or transmit cardholder data.


				Secure Wifi => C

				SAQ C - We use a standalone PA DSS validated payment application that is connected to a router and sits behind a firewall.
				SAQ C- We do not store cardholder data; we send transactions from our terminal/mobile device/POS to our processor via an encrypted connection.




				`,
				script: `-What is a network scan?

				"Its a scan of your network to make sure there are no open ports or any ways to breach and get ahold of the data you are processing."

"Are you at your place of business where you can access the network your (tablet/terminal/domain) is connnected to that processes the credit card data?"

-if there are mulitple locations that process w the internet then you need IP addresses for all locations.

yes: 	"go to google..."
no: 	"You can contact your service provider and ask for the ip address for the business and call us back."




AFTER LAUNCH

"...I have successfully launched the scan.  There are a few steps in this process.  Please allow 1-2 business days for an email notification to update you on your scan and call us back.  In the event you don't recieve an email, then you should definitely call us back and we can help you with those next additional steps. Also, make sure the router is on and the terminal stays connected during this time....lets recap :)" 


				TECH SUPPORT FOR PEOPLE WITHOUT IT:

"We have a partner who is readily available to assist w technical issues such as (Qd). There is a fee involved with this service, would you like me to put you in contact with them and someone will contact you shortly"

___if yes

"I have provided company.com with your information and someone will be in contact with you shortly."

___if no


"Ok if you change your mind later, feel free to call us back and we can provide company.com with your information."

`,
				copypaste: `B / C-VT

				Needed to become compliant probed SAQ , assisted with saq walk thru. Now compliant. Emailed COV to merchant.

				-------------------------------------

				
				C

				Needed to become compliant probed SAQ C, assisted with saq and started scan. Advised scan is queued, await 1-2 business days for scan results.

				Expired scan. Needed to start scan, assisted with walk thru. Advised scan is queued, await 1-2 business days for scan results. 

				Needed to Submit for ASV compliance assisted with walk thru advised await 1-2 business days for approval.

				Assisted with Inconclusive scan, assisted with the 3 questions, needed to submit for compliance assisted with walk thru advised await 1-2 business days for approval.

				Needed assistance with Failed scan advised print vulnerability report and give to IT department. Advised to call if further assistance is needed. 

				Needed assistance with failed scan, assisted with requesting exception. Advised to check back 1-2 business days just to make sure the ASV team responded and if its in passing status. Advised to call if further assistance is needed. `,

				
			},
			desktop: {
				notes: `Website/ Virtual Terminal
						Merchant Enters Card Number
						-------------------------------------
						-------------------------------------


	Swipes Card 

	SAQ C - We use a standalone PA DSS validated payment application that is connected to a router and sits behind a firewall.
	SAQ C- We do not store cardholder data; we send transactions from our terminal/mobile device/POS to our processor via an encrypted connection.

	-They will answer NO to the question : 'Do you process cards by accesing a payment website and keying in the card number?'	
	-Merchant will select Terminal from the drop down menu



	Manually Enters (never swipes) => C-VT

	SAQ C-VT - We manually enter card data via their web browser into a virtual terminal and there is no card reader attached to the device.
	SAQ C-VT - We do not store or transmit cardholder data.

	Should always answer YES to the question : 'Do you only process cards by accessing a payment website and keying in the card number'


	-------------------------------------
	-------------------------------------
	Website/ Virtual Terminal
	Accounting Application
	-------------------------------------
	-------------------------------------

	Card Number isn't Stored => C

	SAQ C - We use a standalone PA DSS validated payment application that is connected to a router and sits behind a firewall.
	SAQ C- We do not store cardholder data; we send transactions from our terminal/mobile device/POS to our processor via an encrypted connection.



	Stored and Tokenized => C-VT

	SAQ C-VT - We manually enter card data via their web browser into a virtual terminal and there is no card reader attached to the device.
	SAQ C-VT - We do not store or transmit cardholder data.



	Stored and Encrypted =>

	**SAQ D - There is no standard answer for this, and the merchant will need to describe their credit card environment.
	**SAQ D - There is no standard answer for this, and the merchant will need to describe how they store, process and/or transmit cardholder data.

	-Never walk merchant through SAQ D. Advise they get with IT to complete.  
	-if they answer Yes to part 4 Q2 ... ask if its encrypted(Y) or truncated(N)


				`,
				script: `"I was able to place you on the Questionnaire.  QUestionairre D has 200+ questions so I will not be able to walk you through it. However, I can email you the merchant guide so that you can use it to fill out the questionairre or you can relay it to your IT person and have them help complete it. D does require a network scan that I can assist you with if you would like."


					-What is a network scan?

					"Its a scan of your network to make sure there are no open ports or any ways to breach and get ahold of the data you are processing."


					"Are you at your place of business where you can access the network your (tablet/terminal/domain) is connnected to that processes the credit card data?"

					-if there are mulitple locations that process w the internet then you need IP addresses for all locations.

					yes: 	"go to google..."
					no: 	"You can contact your service provider and ask for the ip address for the business and call us back."




AFTER LAUNCH

"...I have successfully launched the scan.  There are a few steps in this process.  Please allow 1-2 business days for an email notification to update you on your scan and call us back.  In the event you don't recieve an email, then you should definitely call us back and we can help you with those next additional steps. Also, make sure the router is on and the terminal stays connected during this time....lets recap :)" 



				TECH SUPPORT FOR PEOPLE WITHOUT IT:

"We have a partner who is readily available to assist w technical issues such as (Qd). There is a fee involved with this service, would you like me to put you in contact with them and someone will contact you shortly"

___if yes

"I have provided company.com with your information and someone will be in contact with you shortly."

___if no


"Ok if you change your mind later, feel free to call us back and we can provide company.com with your information."
`,
				copypaste: `C-VT

				Needed to become compliant probed SAQ , assisted with saq walk thru. Compliant & emailed COV.

				------------------------------------------
				D
				Needed to become compliant probed SAQ D, advised they get with IT to complete questionnaire.  Started scan and informed to wait 1-2 business days for results and help with additional steps. 

				------------------------------------------

				C / D

				Needed to become compliant probed SAQ , assisted with saq and started scan. Advised scan is queued, await 1-2 business days for scan results.

				Expired scan. Needed to start scan, assisted with walk thru. Advised scan is queued, await 1-2 business days for scan results. 

				Needed to Submit for ASV compliance assisted with walk thru advised await 1-2 business days for approval.

				Assisted with Inconclusive scan, assisted with the 3 questions, needed to submit for compliance assisted with walk thru advised await 1-2 business days for approval.

				Needed assistance with Failed scan advised print vulnerability report and give to IT department. Advised to call if further assistance is needed. 

				Needed assistance with failed scan, assisted with requesting exception. Advised to check back 1-2 business days just to make sure the ASV team responded and if its in passing status. Advised to call if further assistance is needed.`,
			},
			network: {
				notes: `Integrated Network
						-------------------------------------
						-------------------------------------

				POS Software=> C

	SAQ C - We use a standalone PA DSS validated payment application that is connected to a router and sits behind a firewall.
	SAQ C- We do not store cardholder data; we send transactions from our terminal/mobile device/POS to our processor via an encrypted connection.

	POS SYSTEM:
	-always answer Yes to part 3 Q3
	QIR can be found on a sticker on the pos system or underneath the monitor (name w date, or number)
	-choose integrated network`,
				script: `-What is a network scan?

				"Its a scan of your network to make sure there are no open ports or any ways to breach and get ahold of the data you are processing."

"Are you at your place of business where you can access the network your (tablet/terminal/domain) is connnected to that processes the credit card data?"

-if there are mulitple locations that process w the internet then you need IP addresses for all locations.

yes: 	"go to google..."
no: 	"You can contact your service provider and ask for the ip address for the business and call us back."




AFTER LAUNCH

"...I have successfully launched the scan.  There are a few steps in this process.  Please allow 1-2 business days for an email notification to update you on your scan and call us back.  In the event you don't recieve an email, then you should definitely call us back and we can help you with those next additional steps. Also, make sure the router is on and the terminal stays connected during this time....lets recap :)" 


				TECH SUPPORT FOR PEOPLE WITHOUT IT:

"We have a partner who is readily available to assist w technical issues such as (Qd). There is a fee involved with this service, would you like me to put you in contact with them and someone will contact you shortly"

___if yes

"I have provided company.com with your information and someone will be in contact with you shortly."

___if no


"Ok if you change your mind later, feel free to call us back and we can provide company.com with your information."

`,
				copypaste: `C

				Needed to become compliant probed SAQ C, assisted with saq and started scan. Advised scan is queued, await 1-2 business days for scan results.

				Expired scan. Needed to start scan, assisted with walk thru. Advised scan is queued, await 1-2 business days for scan results. 

				Needed to Submit for ASV compliance assisted with walk thru advised await 1-2 business days for approval.

				Assisted with Inconclusive scan, assisted with the 3 questions, needed to submit for compliance assisted with walk thru advised await 1-2 business days for approval.

				Needed assistance with Failed scan advised print vulnerability report and give to IT department. Advised to call if further assistance is needed. 

				Needed assistance with failed scan, assisted with requesting exception. Advised to check back 1-2 business days just to make sure the ASV team responded and if its in passing status. Advised to call if further assistance is needed.`,
			},
			p2p: {
				notes: `Point to Point Encryption Hardware
				---------------------------------------
				---------------------------------------

				(Merchant MUST provide reference number!
				If they dont have ref number check B or B-IP.

				SAQ P2PE - We utilized a PCI SSC validated P2PE solution and have no access to cardholder information
				SAQ P2PE - We utilized a PCI SSC validated P2PE solution and have no access to cardholder information.
`,
				script: `"Point to point encrypiton solutions help merchants to reduce the scope of their cardholder data enviornmetn and annual PCI DSS assessments."`,
				copypaste: `P2PE

				Needed to become compliant probed SAQ P2PE, assisted with saq walk thru. Compliant & advised to emailed COV.`,
			},
		};
		function setText(type) {
			const selectorEl = document.querySelectorAll(`[data-type=${type}]`);

			const currentlySelectedEls = document.querySelectorAll('.selector.selected');

			currentlySelectedEls.forEach((el) => {
				el.classList.remove('selected');
			});

			selectorEl[0].classList.add('selected');

			const notesEl = document.getElementById('notes');
			const scriptEl = document.getElementById('script');
			const copypasteEl = document.getElementById('copypaste');

			const elements = [
				notesEl,
				scriptEl,
				copypasteEl,
			];

			const resetScroll = (element) => {
				elements.forEach(element => {
					element.scrollTop = 0;
				})
			} ;


			const textToHtml = (text) => {
				return text
				.split(/\n/)
				.join('</span><br><span>')
			};

			resetScroll();

			notesEl.innerHTML = textToHtml(textMap[type].notes);
			scriptEl.innerHTML = textToHtml(textMap[type].script);
			copypasteEl.innerHTML = textToHtml(textMap[type].copypaste);
		}