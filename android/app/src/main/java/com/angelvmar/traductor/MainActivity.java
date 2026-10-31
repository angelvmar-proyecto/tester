package com.angelvmar.traductor;

import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        WebView webView = this.getBridge().getWebView();
        webView.setWebChromeClient(new WebChromeClient());
    }
}
