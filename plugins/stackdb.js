Draw.loadPlugin(function(ui) {

		/**
		 * @param {String} HTML representing a single element
		 * @return {Element}
		 * Credit : https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518
		 */
		function htmlToElement(html) {
			var template = document.createElement('template');
			html = html.trim(); // Never return a text node of whitespace as the result
			template.innerHTML = html;
			return template.content.firstChild;
		}
    
    function getOrCreateButton(ui) {
        if (ui.stackdbButton == null) {
			// Button creation
			ui.stackdbButton = document.createElement('div');
			ui.stackdbButton.className = 'geBtn';
			ui.stackdbButton.innerText = 'StackDB'
			
			// Style
			ui.stackdbButton.style.width = '140px';
			ui.stackdbButton.style.minWidth = '140px';
			ui.stackdbButton.style.textOverflow = 'ellipsis';
			ui.stackdbButton.style.overflowX = 'hidden';
			ui.stackdbButton.style.fontWeight = 'bold';
			ui.stackdbButton.style.textAlign = 'center';
			ui.stackdbButton.style.display = 'inline-block';
			ui.stackdbButton.style.padding = '0 10px 0 10px';
			ui.stackdbButton.style.marginTop = '-4px';
			ui.stackdbButton.style.height = '28px';
			ui.stackdbButton.style.lineHeight = '28px';
			ui.stackdbButton.style.color = '#235695';

			// Events
			ui.stackdbButton.onclick = function() {
				let panel = getOrCreatePanel(ui) 
				if (panel.style.display == 'block') {
					getOrCreatePanel(ui).style.display = 'none';
				} else {
					getOrCreatePanel(ui).style.display = 'block';
				}
			}

			// Insert in DrawIO ui
			if (ui.buttonContainer.firstChild != null) {
				ui.buttonContainer.insertBefore(ui.stackdbButton, ui.buttonContainer.firstChild);
			}
			else {
				ui.buttonContainer.appendChild(ui.stackdbButton);
			}
        }
        return ui.stackdbPanel;
    }

	function getOrCreatePanel(ui) {
		if (ui.stackdbPanel == null) {
			// Button creation
			// ui.stackdbPanel = document.createElement('div');
			// ui.stackdbPanel.innerText = 'StackDB panel'
			
			// Style
			// ui.stackdbPanel.style.width = '140px';
			// ui.stackdbPanel.style.height = '440px';
			// ui.stackdbPanel.style.textOverflow = 'ellipsis';
			// ui.stackdbPanel.style.overflowX = 'hidden';
			// ui.stackdbPanel.style.fontWeight = 'bold';
			// ui.stackdbPanel.style.textAlign = 'center';
			// ui.stackdbPanel.style.display = 'inline-block';
			// ui.stackdbPanel.style.padding = '0 10px 0 10px';
			// ui.stackdbPanel.style.marginTop = '-4px';
			// ui.stackdbPanel.style.height = '28px';
			// ui.stackdbPanel.style.lineHeight = '28px';
			// ui.stackdbPanel.style.color = '#235695';
			// ui.stackdbPanel.style.position = 'fixed';
			// ui.stackdbPanel.style.backgroundColor = 'white';

			// Position
			// ui.stackdbPanel.style.top = '0px';
			// ui.stackdbPanel.style.left = '0px';
			// ui.stackdbPanel.style.display = 'none';
			// ui.stackdbPanel.style.zIndex = "1000";

			ui.stackdbTrigger = htmlToElement(`
				<a 
					title="StackDB" 
					class="geTitle" 
					style="display: block;">
					StackDB
				</a>
			`)

			ui.sidebarContainer.appendChild(ui.stackdbTrigger)
		}
	}

    let button = getOrCreateButton(ui)
	let panel = getOrCreatePanel(ui)

})